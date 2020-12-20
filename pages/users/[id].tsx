import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useState } from 'react'
import UserTable from '@components/User/UserTable';


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
  } else if (!router.query.id) {
    return <h1>This user does not exist.</h1>
  }

  return (
    <Fragment>
      <h1>Single User Information</h1>
      <UserTable user={user} id={router.query.id} />
    </Fragment>
  );
}

export default User;
