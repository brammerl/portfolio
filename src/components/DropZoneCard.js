import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const logo = require('../photos/drop-zone.png')

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
    width: '100%'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Drop Zone Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Drop Zone
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An app that provides the user with all games on Twitch.com that have drops enabled. It also provides the user with a list of streamers that are supplying drops for each game.  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open('https://github.com/DropTopIncorporated/DropZoneFE')}>
          GitHub FE
        </Button>
        <Button size="small" color="primary" onClick={() => window.open('https://github.com/DropTopIncorporated/DropZoneBE')}>
          GitHub BE
        </Button>
        <Button size="small" color="primary" onClick={() => window.open('https://thedropzone.netlify.app/')}>
          Site
        </Button>
      </CardActions>
    </Card>
  );
}