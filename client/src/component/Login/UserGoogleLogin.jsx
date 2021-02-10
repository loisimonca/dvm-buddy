import React, {useContext} from 'react'
import {GoogleLogin} from 'react-google-login';
import {UserContext } from '../../utils/UserContext';

//Refresh token
import {refreshTokenSetup} from '../../utils/refreshToken';

const clientId = "32479969633-uog46n0h5g22l1rps60k0cvbluuq3ni6.apps.googleusercontent.com"

function UserGoogleLogin() {
    const {value, setValue} = useContext(UserContext);

    //google login  
    const onSuccess = (res) =>{
        console.log("[Login Success] currentUser: ", res.profileObj );
        setValue("true")
        const userType = {userType: "User"}
        //initializing the setup
        refreshTokenSetup(res);
        const sendData = Object.assign(res.profileObj, userType)
        localStorage.setItem('user', JSON.stringify(sendData));
        window.location.replace('/');
    };
    const onFailure = (res) =>{
        console.log("[Login failed] res: ", res);
    }

    return (
        <div>
           <GoogleLogin clientId={clientId} 
           render={renderProps =>(<button className="google-login" 
           onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google" aria-hidden="true"></i>Sign in with Google</button>)} 
           buttonText='Login' onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} style={{ marginTop: '100px'}} />
        </div>
    )
}

export default UserGoogleLogin
