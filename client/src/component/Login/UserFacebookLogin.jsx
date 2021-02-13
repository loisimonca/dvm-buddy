import React, { useState, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import {UserContext } from '../../utils/UserContext';
// import {useHistory } from 'react-router-dom'

function UserFacebookLogin() {
    const {setValue, setToken} = useContext(UserContext);
    // const history = useHistory();
    const [state, setState] = useState({
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture:'',
    })
    const responseFacebook = (response) => {
        console.log(response);
        setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            domain: response.graphDomain
        })
        sessionStorage.setItem('token', JSON.stringify(response.accessToken))
        sessionStorage.setItem('type', JSON.stringify('User'))
      }
    const componentClicked = () => console.log("clicked");
    let fbContent;
    if(state.isLoggedIn){
        // history.push("/")
        window.location.replace('/')
        fbContent =(
            <div style={{width: '400px', margin: 'auto', background: '#f4f4f4', padding:'20px'}}>
                <img src={state.picture} alt={state.name} />
                <h2>Welcome {state.name} </h2>
                Email: {state.email}
            </div>
        )
    }else{
        fbContent = (
            <FacebookLogin appId="237379427969902" fields="name,email,picture"  icon="fab fa-facebook" 
            onClick={componentClicked} callback={responseFacebook}  />
        )
    }
    return (
        <div>
             {fbContent}
        </div>
    )
}

export default UserFacebookLogin

