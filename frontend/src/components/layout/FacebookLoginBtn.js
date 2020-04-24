import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'react-bootstrap/Button';
import facebookIcon from '../../images/facebook.svg.png';
import Image from 'react-bootstrap/Image';

const FacebookLoginBtn = props => {
    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email"
            callback={props.responseFacebook} 
            render={renderProps => (
                <Button variant="outline-dark" className="d-flex justify-content-left align-items-center" onClick={renderProps.onClick} block><Image className="mr-auto" style={{height: "20px"}} src={facebookIcon}/><span className="text-center mr-auto">Continue with facebook</span></Button>
            )}
        />
    )
}

export default FacebookLoginBtn;