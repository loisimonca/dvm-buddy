import React, {useContext} from 'react'
import {GoogleLogin} from 'react-google-login';
import {UserContext } from '../../utils/UserContext';
//Refresh token
import {refreshTokenSetup} from '../../utils/refreshToken';
// import {useHistory} from 'react-router-dom';

const clientId = "32479969633-uog46n0h5g22l1rps60k0cvbluuq3ni6.apps.googleusercontent.com"

function UserGoogleLogin() {
    const {setValue, setToken} = useContext(UserContext);
    // const history = useHistory();
    const onSuccess = (res) =>{
        console.log("[Login Success] currentUser: ", res.profileObj );
        //initializing the setup
        refreshTokenSetup(res);
        const userToken = res.tokenObj.id_token
        localStorage.setItem('token', JSON.stringify(userToken))
        localStorage.setItem('type', JSON.stringify("User"))
        setToken(userToken)
        setValue("User")
        window.location.replace("/")
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
