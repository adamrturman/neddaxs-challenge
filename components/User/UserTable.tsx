import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import styles from '../style/Style.module.css';

interface User {
  createdAt: string;
  deletedAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  roleId: string;
  updatedAt: string;
}

interface Props {
  user: User;
  id: string | string[];
}

const UserTable = (props: Props) => {
  const { user } = props;

  return (
    <TableContainer className={styles.userTable} component={Paper}>
      <Table size="small" aria-label="a dense table">
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
              <TableCell align="right"><Moment format="MM/DD/YYYY">{user.createdAt}</Moment></TableCell>
            </TableRow>      
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;