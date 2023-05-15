import React from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='wrapper'>
            <div className='login-box'>
                <h1>Login</h1>
                <input type='text' placeholder='Enter Name here' />
                <input type='text' placeholder='Enter Password here' />
                <button onClick={() => { navigate("/chatbox") }}>Login</button>
            </div>
        </div>
    )
}

export default Login