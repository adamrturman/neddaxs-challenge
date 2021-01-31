# Getting Started

##### Please fork the repository.

### Installation

```
npm i
```

### Starting docker services

```
docker-compose up
```

### URL

```
http://localhost:3000
```

### Run migrations

```
npm run migrate
```

### Run seeder

```
npm run seed
```

## Docker Services

Remove volumes

```
docker-compose down -v
```

# Test

## Use Material UI for all designs and css

##### We are looking for how you break up your code, manage state, can reuse existing code, and knowledge of sequelize/material ui and react. Bonus points for making the website scale well.

##### If you are unfamiliar with nextjs, api routes can be created under /pages/api. 
- https://nextjs.org/docs/api-routes/introduction

### Make a /users page

1. Create a /users route in the API and navigation
2. Get all users and display them in a table

### Make a /users/:id page

1. We are not trying to test for nextjs knowledge. You can create the route in the pages folder with /users/[id].
- https://nextjs.org/docs/routing/introduction
- https://nextjs.org/docs/routing/dynamic-routes
2. Have it display the user by that id.
3. If there is no user with that id display an error.

# Video Demo
![Neddaxs Code Test Demo](https://user-images.githubusercontent.com/67024033/106401843-07400580-63ec-11eb-9738-e9a98a7324d2.gif)

# Images

#### Homepage
![Homepage](https://user-images.githubusercontent.com/67024033/106401085-ce059680-63e7-11eb-963e-d50eaa8c1327.png)


#### List of Users (/users)
![List of Users](https://user-images.githubusercontent.com/67024033/106401096-e2e22a00-63e7-11eb-8299-2a3b3aa4c03f.png)


#### Single User (/users/[id])
![Single User](https://user-images.githubusercontent.com/67024033/106401124-0a38f700-63e8-11eb-9442-134178bd1984.png)

#### Error Page (/users/[id] for an id not in the database)
![Error Page](https://user-images.githubusercontent.com/67024033/106401161-3c4a5900-63e8-11eb-8674-1afdb2008e55.png)


