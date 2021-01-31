import styles from '../style/Style.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const UsersCard = () => {
    return (
        <Card>
          <CardContent className={styles.userCard}>
            <Typography variant="body2" component="p">
              <Link href="/">Back to Homepage</Link>
            </Typography>
          </CardContent>
        </Card>
      );
}

export default UsersCard