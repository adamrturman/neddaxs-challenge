import Card from '@material-ui/core/Card';
import styles from '../style/Style.module.css';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';
import Search from '../Search/Search'


const HomepageCard = () => {
  return (
    <Card>
      <CardContent className={styles.homePageCard}>
        <Typography variant="h2" gutterBottom>
          Welcome to the Homepage
        </Typography>
        <List className={styles.list} component="nav" aria-label="mailbox folders">
          <ListItem style={{ "justifyContent": "center" }} button>
            <Link href="/users">
              <Button variant="contained" color="primary">View all users</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem style={{ "justifyContent": "center" }} button divider>
            <Search />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default HomepageCard;