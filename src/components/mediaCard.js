import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    marginTop: '6rem',
  },
  media: {
    height: 300,
  },
}));

export default function MediaCard({ user, setKnowMore, knowMore }) {
  const classes = useStyles();

  let currUser = user[0];

  const handleClick = () => {
    setKnowMore(!knowMore);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={currUser.picture.large}
          title={currUser.login.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {currUser.name.first} {currUser.name.last}, {currUser.dob.age}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {currUser.email}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <br></br>Gender: {currUser.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          {knowMore ? 'You Stalker...' : 'Learn More'}
        </Button>
      </CardActions>
    </Card>
  );
}
