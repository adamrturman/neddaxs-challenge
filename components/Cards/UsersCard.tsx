import styles from '../style/Style.module.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const UsersCard = () => {
  return (
    <Card>
      <CardContent className={styles.userCard}>
        <Typography variant="body2" component="p">
          <Link href="/">
            <Button variant="contained" color="primary">Back to Homepage</Button>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UsersCard