import UserRow from '../Users/UserRow';

const UserTable = (props) => {
  const { user, id } = props;
  console.log("this is user", user)
  console.log("this is id", id)

  return (
    <table style={{ width: "100%", height: "20rem", marginRight: "2rem", borderCollapse: "collapse", marginTop: "10rem" }}>
      <tbody>
        <th>Id: {user.id}</th>
        <th>First name: {user.firstName}</th>
        <th>Last name: {user.lastName}</th>
        <th>Email: {user.email}</th>
        <th>Created at: {user.createdAt}</th>
      </tbody>
    </table>
  );
}

export default UserTable;