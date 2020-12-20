import UserRow from '../Users/UserRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const UserTable = (props) => {
  const { user, id } = props;
  console.log("this is user", user)
  console.log("this is id", id)

  if(!user.id) {
      return <h1>This user does not exist!</h1>
  }
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={user.id}>
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.firstName}</TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.createdAt}</TableCell>
            </TableRow>      
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;