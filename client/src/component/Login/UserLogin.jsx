import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login';
import API from '../../utils/API';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com'
//Will work on the google login after deploy the page.
function UserLogin() {
    const onSuccess = (res)=>{
        console.log('[Login Success] currentUser: ' , res.profileObj)
    }
    const onFailure = (res) =>{
        console.log('[Login failed] res: ', res);
    }
    const handleLogIn = (e) =>{
        e.preventDefault();
        const email = document.getElementById('user-email').value
        const password = document.getElementById('user-password').value
        API.userLogin({
            email: email,
            password: password
        })
        // redirect to the account page
        .then(res => window.location.replace('/'))
    }
    return (
        <>
        <div className='login-container container'>
            <h1 className='login-header'>Log in to Your Account</h1>
            <div className="user-login-container">
                <div className='user-login-left'>
                    <form onSubmit={handleLogIn}>
                        <div className="user-login-with-account">
                            <input type="text" id='user-email' name="user-login-email"/>
                        </div>
                        <div className="user-login-with-account">
                            <input type="password" id='user-password' name="user-login-password"/>
                        </div>
                        <div>
                            <button type='submit'>Log in</button>
                        </div>
                    </form>
                </div>
                <div>
                    <GoogleLogin clientId={clientId} buttonText='Login' onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} style={{marginTop: '100px'}} isSignedIn={true} />
                </div>
            </div>
            <footer>Need an account? <Link to='/CustomerAccount'>Sign Up</Link></footer>
        </div>
        </>
    )
}

export default UserLogin
