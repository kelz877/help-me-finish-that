import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({

    toolbarSecondary: {
      justifyContent: 'flex-end',
      overflowX: 'auto',
      borderBottom: `1px solid ${theme.palette.divider}`,
      

    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      color: 'black',
      textDecoration: 'none'
    },
  }));

function Navigation(props){
    const classes = useStyles();
    
    const handleSignOut = () => {
        //remove json webtoken from local storage
        localStorage.removeItem("jsonwebtoken")
        //update global state to set is authenticated to false
        props.onSignOut();
        props.history.push('/login')
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">

                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {props.authenticated ? null : <NavLink to='/login' variant="body2" className={classes.toolbarLink}>Login</NavLink>}


                    {props.authenticated ? null : <NavLink
                    to='/register' 
                    variant="body2"
                    className={classes.toolbarLink}
                    >
                    Register</NavLink>}
                    {props.authenticated ? <NavLink variant="body2" 
                    className={classes.toolbarLink} to='/'>Account</NavLink> : null}


                    
                    {props.authenticated ? <NavLink to='#' variant="body2"  className={classes.toolbarLink} onClick={() => handleSignOut()} >Log Out</NavLink> : null}

                </Toolbar>
            </Container>
        </React.Fragment>
    )
    

}

const mapStateToProps = (state) => {
    return {
        authenticated: state.isAuthenticated //is authenticated is coming from global redux state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch({type: "SIGN_OUT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))