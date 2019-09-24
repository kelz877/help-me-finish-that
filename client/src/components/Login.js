import React, {useState} from 'react'
import axios from 'axios'
//import {connect} from 'react-redux'
import {setAuthenticationHeader} from './utils/authenticate'


function Login(){
    const [user, setUser] = useState({username: '', password:''})

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
            <div>Login</div>
            <div>
                <input type="text" name="username" placeholder="Username" onChange={(e) => handleTextChange(e)}></input>
                <input type="password" name="password" placeholder="Password" onChange={(e) => handleTextChange(e)}></input>
                <button onClick={() => handleLogin()}>Login</button>
            </div>
            
        </div>
    )
}

export default Login