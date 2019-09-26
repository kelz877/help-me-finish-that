import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://kelz877.github.io/portfolio/">
          Kelly Benson
        </Link>{' '}
        {new Date().getFullYear()}
        
      </Typography>
    );
  }
  const useStyles = makeStyles(theme => ({

  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  }));

export function Footer(){
    const classes = useStyles();

    return (
        
        <React.Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                Help Me Finish That!
                </Typography>
                <Typography variant="h3" align="center" color="textSecondary" component="p">
                    <IconButton className={classes.button}>
                        <Icon className="fa fa-github"><a href="https://github.com/kelz877"></a></Icon></IconButton>
                    <IconButton className={classes.button}>
                        <Icon className='fa fa-linkedin'><a href="https://www.linkedin.com/in/kellyjbenson/"></a></Icon>
                    </IconButton>
                    <IconButton className={classes.button}>
                        <Icon className='fa fa-twitter'><a href="https://www.twitter.com/kelz877/"></a></Icon>
                    </IconButton>
                
                </Typography>
            <Copyright />
            </Container>
            </footer>
        </React.Fragment>

            
        
    )
}
