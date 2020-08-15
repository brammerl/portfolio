import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const logo = require('../photos/last-hope.png')

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
          title="Last Hope Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Last Hope
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A role based game where the user navigates through space to find humanity's last hope planet. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open('https://github.com/3rd-git-from-the-hub/space-game-backend')}>
          GitHub FE
        </Button>
        <Button size="small" color="primary" onClick={() => window.open('https://github.com/3rd-git-from-the-hub/space-game-fe')}>
          GitHub BE
        </Button>
        <Button size="small" color="primary" onClick={() => window.open('https://lit-depths-90375.herokuapp.com/')}>
          Site
        </Button>
      </CardActions>
    </Card>
  );
}