import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const logo = require('../photos/affirme-header.jpeg')

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
  window.open('https://twitter.com/affirm_e')
}

const openGitHub = () => {
  window.open('https://github.com/Affirm-e/affirmations-project')
}
export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Affirme Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Affirm.e
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A twitter bot that tweets daily affirmations gathered via web scraping. It also sends a text message each time a tweet is sent via the Twillio API. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => openGitHub()}>
          GitHub
        </Button>
        <Button size="small" color="primary" onClick={() => openSite()}>
          Site
        </Button>
      </CardActions>
    </Card>
  );
}