import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Search from '../Search/Search'


const HomepageCard = () => {
  return (
    <Card>
      <CardContent style={{ textAlign: "center" }}>
        <Typography gutterBottom>
          Welcome to the Homepage
            </Typography>
        <Typography>
          <Link href="/users">View all users</Link>
        </Typography>
          <Search />
      </CardContent>
    </Card>
  );
}

export default HomepageCard;