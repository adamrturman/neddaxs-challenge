import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import UserTable from '@components/User/UserTable';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Layout from '@components/Layout/Layout';
import UserCard from '@components/Cards/UserCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../../components/style/Style.module.css';

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
    return <CircularProgress className={styles.spinner} />
  }

  //  TODO - fix the inital render with user as empty array throwing the error on line 41
  return (
    <Layout>
      { user.id ?
        <Fragment>
          <Typography className={styles.users} variant="h2">
            {user.firstName}'s Information
          </Typography>
          <UserCard />
          <UserTable user={user} id={router.query.id} />
        </Fragment> :
        <Fragment>
          <div className={styles.error}>
            <h1>Error: {user.error.message}</h1>
            <Typography variant="h3">
              A User with id <span className={styles.blue}>{router.query.id}</span> does not exist in the database.
            </Typography>
            <div className={styles.errorButton}>
            <Link href="/users">
              <Button variant="contained" color="primary">
              View all users
              </Button>
            </Link>
            </div>
            <div className={styles.errorButton}>
            <Link href="/">
              <Button variant="contained" color="primary">
              Return to Homepage
              </Button>
            </Link>
            </div>
          </div>
        </Fragment>
      }
    </Layout>

  );
}

export default User;
