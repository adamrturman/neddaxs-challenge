import Link from 'next/link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UserRow = (props) => {
    const { user } = props

    return (
        // <tr key={user.id} id={user.id}>
        //     <th style={{ border: "1px solid black" }}>{user.id}</th>
        //     <th style={{ border: "1px solid black" }}><Link href={`/users/${user.id}`}>{user.firstName}</Link></th>
        // </tr>
        <TableRow key={user.id} id={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell><Link href={`/users/${user.id}`}>{user.firstName}</Link></TableCell>
        </TableRow>
    );
}

export default UserRow;
