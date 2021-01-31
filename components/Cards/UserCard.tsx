import styles from '../style/Style.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const UserCard = () => {
    return (
        <Card>
          <CardContent className={styles.userCard}>
            <Typography>
                <Link href="/">Back to Homepage</Link>
            </Typography>
            <Typography>
                <Link href="/users">View all users</Link>
            </Typography>
          </CardContent>
        </Card>
      );
}

export default UserCard