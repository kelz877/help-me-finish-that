import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthenticationHeader} from './utils/authenticate'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

const tealOne = teal[200]
const tealTwo = teal[300]
const color = grey[100]
const lockColor = orange[400]
const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: color,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: lockColor,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: tealTwo
    },
  }));


function Login(props){
    const [user, setUser] = useState({username: '', password:''})
    const classes = useStyles();

    const handleLogin = () => {
        console.log("Button works")
        //performs a login request to the server
        axios.post('http://localhost:8080/account/login', {
            username: user.username,
            password: user.password
        }).then(response => {
            const token = response.data.token
            //save token in local storage
            localStorage.setItem('jsonwebtoken', token)
            //set defauly axios header
            setAuthenticationHeader(token)
            console.log(response.data)
            //console.log(response.data.user_id)
            const user_id = response.data.user_id
            const username = response.data.username
            props.getUserId(user_id)
            props.getUsername(username)
            props.onAuthenticated(token)
        }).then(response => {
            props.history.push('/user-products')
        })
    }
    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => handleTextChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => handleTextChange(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            className={classes.submit}
            onClick={() => handleLogin()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>

      </div>

    </Container>



            //     <input type="text" name="username" placeholder="Username" onChange={(e) => handleTextChange(e)}></input>
            //     <input type="password" name="password" placeholder="Password" onChange={(e) => handleTextChange(e)}></input>
            //     <button onClick={() => handleLogin()}>Login</button>
            // </div>
            

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserId: (user_id) => dispatch({payload: user_id, type: 'LOGGED_IN_USER_ID'}),
        onAuthenticated: (token) => dispatch({type: 'ON_AUTHENTICATED', token: token}),
        getUsername: (username) => dispatch({payload: username, type: 'LOGGED_IN_USERNAME'}),
    }
}


export default connect(null, mapDispatchToProps)(Login)