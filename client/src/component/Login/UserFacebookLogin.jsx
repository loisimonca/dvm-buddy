import React, { useState, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import {UserContext } from '../../utils/UserContext';

function UserFacebookLogin() {
    const {value, setValue} = useContext(UserContext);
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
            picture: response.picture.data.url
        })
      }
    const componentClicked = () => console.log("clicked");
    let fbContent;
    if(state.isLoggedIn){
        setValue("true")
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

