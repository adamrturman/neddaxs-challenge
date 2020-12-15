// import * as React from 'react'

// interface Props {
//     text: string;
// }

// // export default const Users: React.FC<Props> = () => {
// //     return (
// //         <h1>Users</h1>
// //     );
// // };

// export default function Users(){
//     return <h1>Users</h1>
// }

import  { asyncEndpoint }  from 'lib/middleware';
import db from 'db/models';


const usersRouter = async (req, res) => {
  if (req.method === 'GET') {
    const users = await db.Users.findAll();
    console.log(users)
    if (!users) {
      throw {
        status: 404,
        message: 'User not found',
      };
    }
    res.status(200).send(users);
  } else {
    res.status(404).json({ error: { message: 'Not found' } });
  }
};

const route = async (req, res) => {
  await asyncEndpoint(req, res, usersRouter);
};

export default route;