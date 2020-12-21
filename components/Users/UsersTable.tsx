import UserRow from './UserRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const UsersTable = (props) => {
  const { users } = props;

  return (
    // <table style={{ width: "100%", height: "20rem", marginRight: "2rem", borderCollapse: "collapse", marginTop: "10rem" }}>
    //   <tbody>
    //     {users.map(user => <UserRow user={user} />)}
    //   </tbody>
    // </table>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>First Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => <UserRow user={user} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
