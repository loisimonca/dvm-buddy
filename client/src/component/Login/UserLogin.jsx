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
        .then(res => {
            const data = res.data.userType
            if(data ==='User'){
                console.log('welcome user')
                window.location.replace('/')
            }else if(data==="Employee"){
                console.log('Welcome Employee')
                window.location.replace('/')
            }
        })
        .catch(err =>{
            console.log('Incorrect username or password');
        })
    }
    return (
        <>
        <div className='login-container container'>
            <div className='login-inner-container'>
                <h1><i className="login-page-icon fas fa-paw"></i>DVM Buddy</h1>
                <h1 className='login-header'>Log in to Your Account</h1>
                <div className="user-login-container">
                    <form onSubmit={handleLogIn}>
                        <div className="user-login-with-account">
                            <input type="text" className='user-login-input' id='user-email' name="user-login-email" placeholder="User email"/>
                        </div>
                        <div className="user-login-with-account">
                            <input type="password" className='user-login-input' id='user-password' name="user-login-password" placeholder="User Password"/>
                        </div>
                        <div>
                            <button className='login-submit-button' type='submit'>LOGIN</button>
                        </div>
                    </form>
                    <div>
                        <GoogleLogin className="user-login-with-google" clientId={clientId} buttonText='Google Login' onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} style={{marginTop: '100px'}} isSignedIn={true} />
                    </div>
                </div>
                <footer className='login-page-footer'>Need an account? <Link to='/CustomerAccount'>Sign Up</Link></footer>
                <div className='login-page-back-to-home'><Link className='login-page-back-to-home-link' to='/'><i className="login-page-icon far fa-hand-point-left"></i>Back to Home Page</Link></div>
            </div>
        </div>
        </>
    )
}

export default UserLogin
