import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const HomepageCard = () => {
    return (
        <Card>
          <CardContent style={{textAlign:"center"}}>
            <Typography gutterBottom>
              Welcome to the Homepage
            </Typography>
            <Typography variant="body2" component="p">
            <Link href="/users">View all users</Link>
            </Typography>
          </CardContent>
        </Card>
      );
}

export default HomepageCard