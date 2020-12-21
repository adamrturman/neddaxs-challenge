import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'


const UsersCard = () => {
    return (
        <Card>
          <CardContent style={{textAlign:"center", width:"50%", margin:"auto", marginBottom:"2rem", background:"#eee"}}>
            <Typography variant="body2" component="p">
            <Link href="/">Back to Homepage</Link>
            </Typography>
          </CardContent>
        </Card>
      );
}

export default UsersCard