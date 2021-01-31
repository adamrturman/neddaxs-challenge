import UserRow from './UserRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Props {
  users: {
    createdAt: string;
    deletedAt: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    password: string;
    roleId: number;
    updatedAt: string;
    // map?: (user: object) => object;  removed line 38 linting error with this, but not sure if it's necessary
  } 
}

const UsersTable: React.FC<Props> = (props) => {
  const { users } = props;

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>First Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => 
            <UserRow user={user} key={user.id} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
