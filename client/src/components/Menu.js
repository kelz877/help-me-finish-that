import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({

    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      color: 'black',
      textDecoration: 'none'
    },



  }));

const pages = [
    'Products',
    'My Products',
    'Add Product',
    'Produce',
    'Tasks',
    'Community',
    'Discussion'
]

function Menu(props){
    const classes = useStyles();

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        {props.authenticated ? <NavLink
                            
                            variant="body2"
                            to='/product-display'
                            className={classes.toolbarLink}
                        >
                            Products
                        </NavLink> : null}
                        {props.authenticated ? <NavLink
                            
                            variant="body2"
                            to='/user-products'
                            className={classes.toolbarLink}
                        >
                            My Products
                        </NavLink> : null}
                        {props.authenticated ? <NavLink
                            
                            variant="body2"
                            to='/add-product'
                            className={classes.toolbarLink}
                        >
                            Add Product
                        </NavLink> : null}
      
                        {props.authenticated ? <NavLink variant="body2" className={classes.toolbarLink} to='/'>Messages</NavLink> : null}

                        {props.authenticated ? <NavLink variant="body2" className={classes.toolbarLink} to='/'>Archived Products</NavLink> : null}
                    </Toolbar>
                </Container>


            </React.Fragment>
            {/* add authentication to the links */}
            
            {/* <NavLink to='/product-display'>Products</NavLink>
            <NavLink to='/user-products'>My Products</NavLink>
            <NavLink to='/add-product'>Add Product</NavLink>            
            <NavLink to='/coming-soon'>Produce</NavLink>
            <NavLink to='/coming-soon'>Tasks</NavLink>
            <NavLink to='/coming-soon'>Users</NavLink>
            <NavLink to='/coming-soon'>Discussion</NavLink> */}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(withRouter(Menu))
