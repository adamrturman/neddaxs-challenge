import Link from 'next/link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface Props {
    user: {
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
}


const UserRow:React.FC<Props> = (props) => {
    const { user } = props

    return (
        <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>
                <Link href={`/users/${user.id}`}>{user.firstName}</Link>
            </TableCell>
        </TableRow>
    );
}

export default UserRow;
