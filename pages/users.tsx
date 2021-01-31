import React, { useState, useEffect, Fragment } from 'react'
import UsersTable from '@components/Users/UsersTable';
import Layout from '@components/Layout/Layout';
import UsersCard from '@components/Cards/UsersCard'

interface User {
  createdAt: string;
  deletedAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  roleId: string;
  updatedAt: string;
}

interface Props {
  user: User;
}

interface Error {
  message: string;
}

interface Props {
  users: User[];
  error: Error;
}


const Users: React.FC<Props> = () => {
    const [error, setError] = useState({
      message: ''
    });
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
      return <div>Loading...</div>;
    } else {
      return (
        <Layout>
            <h1 style={{marginTop:"5rem", textAlign:"center", backgroundColor:"white", marginBottom:"0"}}>Here are all the users</h1>
            <UsersCard />
            <UsersTable users={users}/>
        </Layout>
      );
    }
  }


export default Users;
