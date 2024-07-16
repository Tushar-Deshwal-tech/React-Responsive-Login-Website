import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
        <div className='login-main'>
            <div className='title-description'>
                <div className='login-text'><h4>Login to your account.</h4></div>
                <div className='sign-text'>Please sign in to your account </div>
            </div>
            <div className='email-input-field'>
              <div className='email-text'>Email Address</div>
              <div className='email-input'><input type="text" /></div>
            </div>
        </div>
    </div>
  )
}

export default Login