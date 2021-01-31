import React, { useState, useEffect, Fragment } from 'react';
import styles from '../components/style/Style.module.css';
import UsersTable from '@components/Users/UsersTable';
import Typography from '@material-ui/core/Typography';
import Layout from '@components/Layout/Layout';
import UsersCard from '@components/Cards/UsersCard';
import CircularProgress from '@material-ui/core/CircularProgress';


function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setUsers(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <CircularProgress className={styles.spinner} />;
    } else {
      return (
        <Layout>
          <Typography className={styles.users} variant="h1">User List</Typography>
          <Typography className={styles.users} variant="h4">Click a name to view more details</Typography>
            <UsersCard />
            <UsersTable users={users}/>
        </Layout>
      );
    }
  }


export default Users