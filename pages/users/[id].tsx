import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useState } from 'react'
import UserTable from '@components/User/UserTable';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import UserCard from '@components/Cards/UserCard'

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
  error: Error;
}

interface State {
  user: User;
}

interface Error {
  message: string;
}

const User: React.FC<{}> = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({
    createdAt: '',
    deletedAt: '',
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    password: '',
    roleId: '',
    updatedAt: ''
  })

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

  console.log("user", user)
  //  TODO - fix the inital render with user as empty array throwing the error on line 41
  return (
    <Layout>
      { user.id ?
        <Fragment>
          <h1 style={{ marginTop: "5rem", textAlign: "center" }}>{user.firstName}'s Information</h1>
          <UserCard />
          <UserTable user={user} id={router.query.id} />
        </Fragment> :
        <Fragment>
          <div style={{ textAlign: "center" }}>
            <h1>Error: {user.error.message}</h1>
            <h2>A User with id {router.query.id} does not exist in the database.</h2>
            <h3><Link href="/users">View all users</Link></h3>
            <h3><Link href="/">Back to Homepage</Link></h3>
          </div>
        </Fragment>
      }
    </Layout>

  );
}

export default User;
