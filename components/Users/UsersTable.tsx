import UserRow from './UserRow';

const UsersTable = (props) => {
  const { users } = props;

  return (
    <table style={{ width: "100%", height: "20rem", marginRight: "2rem", borderCollapse: "collapse", marginTop: "10rem" }}>
      <tbody>
        {users.map(user => <UserRow user={user} />)}
      </tbody>
    </table>
  );
}

export default UsersTable;
