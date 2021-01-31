import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useState } from 'react'
import UserTable from '@components/User/UserTable';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import UserCard from '@components/Cards/UserCard'


const User = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([])

  useEffect(() => {
      fetch(`http://localhost:3000/api/v1/users/${router.query.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setUser(result);
            setIsLoaded(true);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        );
  }, [router.query.id])

  if (!isLoaded) {
    return <h1>Loading....</h1>
  } 

  //  TODO - fix the inital render with user as empty array throwing the error on line 41
  return ( 
       <Layout>
         { user.id ?
         <Fragment>
            <h1 style={{marginTop:"5rem", textAlign:"center"}}>{user.firstName}'s Information</h1>  
            <UserCard />
            <UserTable user={user} id={router.query.id} />
         </Fragment> :
         <Fragment>
            <h1  style={{marginTop:"5rem", textAlign:"center"}}>Error: {user.error.message}</h1>
            <h2 style={{ textAlign:"center" }}>A User with id {router.query.id} does not exist in the database.</h2>
         </Fragment>
         }
      </Layout>

  );
}

export default User;
