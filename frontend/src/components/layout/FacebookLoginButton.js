import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'react-bootstrap/Button';

const FacebookLoginButton = props => {
    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email"
            callback={props.responseFacebook} 
            render={renderProps => (
                <Button style={{backgroundColor: "rgb(59, 89, 152", borderColor: "rgb(59, 89, 152"}} className="d-flex justify-content-left align-items-center" onClick={renderProps.onClick} block><i className="fab fa-facebook-f mr-auto"></i><span className="text-center mr-auto">Continue with facebook</span></Button>
            )}
        />
    )
}

export default FacebookLoginButton;