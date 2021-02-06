import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import API from '../../utils/API';

function AdminLogin() {

const handleLogIn = (e) =>{
    e.preventDefault();
    const email = document.getElementById('admin-email').value
    const password = document.getElementById('admin-password').value
    API.userLogin({
        email: email,
        password: password
    })
    // redirect to the admin account page
    .then(res => window.location.replace('/'))
}
return (
    <>
    <div className='login-container container'>
        <div className='login-inner-container'>
            <h1><i className="login-page-icon fas fa-paw"></i>DVM Buddy Employee</h1>
            <h1 className='login-header'>Log in to Your Account</h1>
            <div className="user-login-container">
                <form onSubmit={handleLogIn}>
                  <div className="user-login-with-account">
                        <input type="text" className='user-login-input' id='employee-id' name="employee-id" placeholder="Employee Id"/>
                    </div>
                    <div className="user-login-with-account">
                        <input type="text" className='user-login-input' id='admin-email' name="admin-login-email" placeholder="User email"/>
                    </div>
                    <div className="user-login-with-account">
                        <input type="password" className='user-login-input' id='admin-password' name="adming-login-password" placeholder="User Password"/>
                    </div>
                    <div>
                        <button className='login-submit-button' type='submit'>LOGIN</button>
                    </div>
                </form>
            </div>
            {/* Link to admin account create page  */}
            <footer className='login-page-footer'>Need an account? <Link to='/'>Sign Up</Link></footer>
            <div className='login-page-back-to-home'><Link className='login-page-back-to-home-link' to='/'><i className="login-page-icon far fa-hand-point-left"></i>Back to Home Page</Link></div>
        </div>
    </div>
    </>
)
}

export default AdminLogin
