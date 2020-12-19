import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useState } from 'react'


const User = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [user, setUser] = useState([])

  useEffect(() => {
      fetch(`http://localhost:3000/api/v1/users/${router.query.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setUser(result);
            // TODO set loaded flag
          },
          (error) => {
            setError(error);
          }
        );
  }, [router.query.id])

  // use !loaded to do an early return of <>Loading...</> (use a MUI treatment later)

  return (
    <Fragment>
      <h1>information for a single user</h1>
      <table style={{ width: "100%", height: "20rem", marginRight: "2rem", borderCollapse: "collapse", marginTop: "10rem" }}>
        <tbody>
          {/* <tr key={user.id} id={user.id}>
            <th style={{ border: "1px solid black" }}>{user.id}</th>
            <th style={{ border: "1px solid black" }}>{user.firstName}</th>
            <th style={{ border: "1px solid black" }}>{user.lastName}</th>
            <th style={{ border: "1px solid black" }}>{user.email}</th>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
}

export default User;
