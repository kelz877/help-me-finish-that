import React, {useState} from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

const registerColor = orange[400]
const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
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
      backgroundColor: registerColor,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

function Register(props){
    const [user, setUser] = useState({username: '', password: ''})
    const classes = useStyles();

    const handleRegister = () => {
        axios.post('http://localhost:8080/account/register', {
            username: user.username,
            password: user.password,
            full_name: user.full_name,
            email_address: user.email_address,
            zip_code: user.zip_code,
            user_image: user.user_image
        }).then(response => {
            props.history.push('/login')
        })
    }
    
    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
             <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon>person_add</Icon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="full_name"
            autoComplete="full name"
            autoFocus
            onChange={(e) => handleTextChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email_address"
            label="Email Address"
            name="email_address"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleTextChange(e)}
                />


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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user_image"
            label="Please upload an image of yourself"
            name="user_image"
            autoFocus
            onChange={(e) => handleTextChange(e)}
                />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="zip_code"
            label="Zip Code"
            name="zip_code"
            autoComplete="zip code"
            autoFocus
            onChange={(e) => handleTextChange(e)}
                />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleRegister()}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Return to login page"}
              </Link>
            </Grid>
          </Grid>

      </div>

    </Container>


        <div>Register</div>
        <div>
            <input type="text" name="username" placeholder="Username" onChange={(e) => handleTextChange(e)}></input>
            <input type="password" name="password" placeholder="Password" onChange={(e) => handleTextChange(e)}></input>
            <input type="text" name="full_name" placeholder="Full Name" onChange={(e) => handleTextChange(e)}></input>
            <input type="email" name="email_address" placeholder="Email Address" onChange={(e) => handleTextChange(e)}></input>
            <input type="number" min="11111" max="99999" name="zip_code" placeholder="Zip Code" onChange={(e) => handleTextChange(e)}></input>
            <input type="text" name="user_image" placeholder="User Image" onChange={(e) => handleTextChange(e)}></input>
            <button onClick={() => handleRegister()}>Register</button>
        </div>
        
    </div>
    )

}

export default Register