import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const logo = require('../photos/crypto-stimulus-header.jpg')

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
    width: '100%'
  },
});

const openSite = () => {
  window.open('https://cryptostimulus.github.io/Project-Week-cryptoStimulus/')
}

const openGithub = () => {
  window.open('https://github.com/cryptoStimulus/Project-Week-cryptoStimulus')
}

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Crypto Stimulus
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A directory of local organizations in the Portland Metropolitan area that people can donate all or part of their stimulus checks to. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => openGithub()}>
          GitHub
        </Button>
        <Button size="small" color="primary" onClick={() => openSite()}>
          Site
        </Button>
      </CardActions>
    </Card>
  );
}