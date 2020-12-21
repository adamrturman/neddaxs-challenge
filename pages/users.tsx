import React, { useState, useEffect, Fragment } from 'react'
import UsersTable from '@components/Users/UsersTable';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import Header from '@components/Layout/Header/Header'
import UsersCard from '@components/Cards/UsersCard'

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/v1/users")
        .then(res => res.json())
        .then(
          (result) => {
            console.log("This is the result of fetch", result) //  returns an array of three objects 
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
