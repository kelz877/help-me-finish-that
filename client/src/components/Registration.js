import React, {useState} from 'react'
import axios from 'axios'


function Register(props){
    const [user, setUser] = useState({username: '', password: ''})

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