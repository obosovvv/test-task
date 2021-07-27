import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../img.jpg'

const useStyles = makeStyles({
  root: {
    margin: 20,
    maxWidth: 345,
    width: 345
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Rick"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.episode.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date of arriving: { props.episode.air_date }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Episode number: { props.episode.episode }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={props.onModalOpen} color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
