import React from 'react'
import {GoogleLogout} from 'react-google-login';
import './Login.css'

const clientId = "32479969633-uog46n0h5g22l1rps60k0cvbluuq3ni6.apps.googleusercontent.com"

function UserGoogleLogout() {
    const onSuccess = () =>{
        alert('Logout made successfully 😊')
    }
    return (
        <div>
            <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} ></GoogleLogout>
        </div>
    )
}

export default UserGoogleLogout
