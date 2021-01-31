import React, { useState, useEffect, Fragment } from 'react'
import UsersTable from '@components/Users/UsersTable';
import Layout from '@components/Layout/Layout';
import UsersCard from '@components/Cards/UsersCard'

interface Props {
  users: {
      createdAt: string;
      deletedAt: string;
      email: string;
      firstName: string;
      id: number;
      lastName: string;
      password: string;
      roleId: number;
      updatedAt: string;
    }
    error: {
      message: string;
    }
}


const Users: React.FC<Props> = () => {
    const [error, setError] = useState<boolean | null>(null);
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


export default Users
