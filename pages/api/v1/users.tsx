import  { asyncEndpoint }  from 'lib/middleware';
import db from 'db/models';
import React from 'react';

const usersRouter = async (req, res) => {
  if (req.method === 'GET') {
    const users = await (await db.Users.findAll());
    if (!users) {
      throw {
        status: 404,
        message: 'There are no users',
      };
    }
    res.status(200).send(users)
  } else {
    res.status(404).json({ error: { message: 'Not found' } });
  }
};

const usersRoute = async (req, res) => {
  await asyncEndpoint(req, res, usersRouter);
};


export default usersRoute;
