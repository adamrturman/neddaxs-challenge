import React, { useState, useEffect } from 'react'


function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/api/users")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result) //  returns an array of three objects 
            setIsLoaded(true);
            setUsers(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table style={{width: "100%", borderCollapse: "collapse", marginTop:"10rem"}}>
            <tbody>
            {users.map(user => (
            <tr key={user.id}>
                <th style={{border: "1px solid black"}}>{user.id}</th>
                <th style={{border: "1px solid black"}}>{user.firstName}</th>
                <th style={{border: "1px solid black"}}>{user.lastName}</th>
                <th style={{border: "1px solid black"}}>{user.email}</th> 
            </tr>
          ))} 
          </tbody>
        </table>        
      );
    }
  }

export default Users
