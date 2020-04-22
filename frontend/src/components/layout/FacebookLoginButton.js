import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'react-bootstrap/Button';

const FacebookLoginButton = props => {
    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email"
            onClick={props.FacebookLoginCTA}
            callback={props.responseFacebook} 
            render={renderProps => (
                <Button variant="outline-primary" className="d-flex justify-content-left align-items-center" onClick={renderProps.onClick} block><i className="fab fa-facebook-f mr-4"></i><span className="ml-5">Login with Facebook</span></Button>
            )}
        />
    )
}

export default FacebookLoginButton;