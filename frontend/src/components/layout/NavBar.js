import React from 'react';
import PrivateNavBar from './PrivateNavBar';
import PublicNavbar from './PublicNavBar';
import { useLocation } from "react-router-dom";


const NavBar = props => {
  
    let location = useLocation();
    switch (location.pathname) {
      case "/dashboard":
        return <PrivateNavBar />;
        break;
      case "/weekkit":
        return <PrivateNavBar />;
        break;
      case "/setting":
        return <PrivateNavBar />;
        break;
      default:
        return <PublicNavbar />;
        break;
    }
}

export default NavBar;