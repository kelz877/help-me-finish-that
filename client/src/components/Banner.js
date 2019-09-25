import React from 'react'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({

    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
   
  }));

export function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Help Me Finish That!
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A zero waste social networking platform to connect with like-minded people around you! 
          </Typography>
        </Container>
      </div>

    )
}