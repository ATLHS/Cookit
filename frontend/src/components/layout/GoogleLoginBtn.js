import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import Button from 'react-bootstrap/Button';
import googleIcon from '../../images/google.svg.png';
import Image from 'react-bootstrap/Image';

const GoogleLoginBtn = props => {
    return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_APP_ID}
      render={renderProps => (
        <Button variant="outline-dark" className="d-flex justify-content-left align-items-center" onClick={renderProps.onClick} block><Image className="mr-auto" style={{height: "20px"}} src={googleIcon}/><span className="text-center mr-auto">Continue with google</span></Button>
    )}
    cookiePolicy={'single_host_origin'}
    onSuccess={props.responseGoogle}
    />
    )
}

export default GoogleLoginBtn;