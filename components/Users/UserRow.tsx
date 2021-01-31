import Link from 'next/link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
            <TableCell>
                <Typography >{user.id}</Typography>
            </TableCell>
            <TableCell>
                <Link href={`/users/${user.id}`}>
                    <Button >{user.firstName}</Button>
                </Link>
            </TableCell>
        </TableRow>
    );
}

export default UserRow;
