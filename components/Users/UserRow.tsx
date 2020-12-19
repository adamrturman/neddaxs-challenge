import Link from 'next/link';

const UserRow = (props) => {
    const { user } = props

    return (
        <tr key={user.id} id={user.id}>
            <th style={{ border: "1px solid black" }}>{user.id}</th>
            <th style={{ border: "1px solid black" }}><Link href={`/users/${user.id}`}>{user.firstName}</Link></th>
        </tr>
    );
}

export default UserRow;
