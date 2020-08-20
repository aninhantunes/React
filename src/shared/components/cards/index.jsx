import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Alert from '@material-ui/lab/Alert';
import { WHITE_COLOR } from '../../../theme'
import { ArrowDownCircle } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    minHeight: '550px',
  },
  contents: {
    minHeight: '550px',
  },
  media: {
    height: '250px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    display: 'flex',
    alignSelf: 'left',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  previous: {
    textDecoration: 'line-through',

  },

  textAlert: {
    color: WHITE_COLOR,
  },

  alert: {
    width: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  starContent: {
    display: 'flex',
    alignSelf: 'center',
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardComponent({ name, description, price, previousPrice, ratings, image }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const mediaArray = ratings.map((item) => item.value);
  let mediaVotes = 0;

  mediaArray.forEach((value) => {
    mediaVotes += value / mediaArray.length;
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const descount = (price, previousPrice) => {
    if (previousPrice) {
      return (
        <Alert variant="filled" severity="success" icon={(<ArrowDownCircle />)} >
          <Typography variant='h2' className={classes.textAlert}>
            {Math.round((100 * (previousPrice - price)) / previousPrice)}%
          </Typography>
        </Alert>
      )
    }

  };

  return (
    <Card className={classes.root}>
      <Grid container direction='column' justify='space-between' className={classes.contents}>
        <Grid item>
          <Grid container direction='column' justify='flex-start'>
            <Grid item>
              <CardHeader title={name} />
              <CardMedia className={classes.media} image={image} title={name} />
            </Grid>
            <Grid item>
              <CardContent>
                <Grid container direction='row' justify='space-between' alignItems='center' >
                  <Grid item>
                    {previousPrice &&
                      <Typography variant='h3' className={classes.previous}>
                        R$ ${previousPrice}
                      </Typography>
                    }
                    <Typography variant='h1'>
                      R$ ${price}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.alert}>
                    {descount(price, previousPrice)}
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CardActions disableSpacing>
            <Grid container>
              <Grid item xs={2}>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
              </Grid>
              <Grid item xs={6} className={classes.starContent}>
                <Grid container direction='row' justify='center'>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Grid key={`key${value}`}>
                      {mediaVotes >= value ? (
                        <StarIcon />
                      ) : mediaVotes >= value - 0.5 ? (
                        <StarHalfIcon />
                      ) : (
                            <StarBorderIcon />
                          )}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>{description}</Typography>
            </CardContent>
          </Collapse>
        </Grid>
      </Grid>
    </Card>
  );
}
