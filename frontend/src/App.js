import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nesty from './components/Nesty';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import ConfirmAccount from './components/ConfirmAccount';
import ProtectedRoute from './components/utils/ProtectedRoute';
import PublicRoute from './components/utils/PublicRoute';
import CookitDashboard from './components/protected/CookitDashboard';
import Weekkit from './components/protected/Weekkit';
import Setting from './components/protected/Setting';
import CheckBeforeResetPassword from './components/utils/CheckBeforeResetPassword';
import SetPassword from './components/SetPassword';

function App() {

  return (
    <Router>
      <div className="App h-100">
      <Container className="p-0 h-100" fluid>
        <NavBar/>
        <Switch>
          <PublicRoute exact path="/">
            <Nesty />
          </PublicRoute>
          <PublicRoute path="/users/signup">
            <Signup />
          </PublicRoute>
          <PublicRoute path="/users/login">
            <Login />
          </PublicRoute>
          <Route path="/users/confirmation/:token">
            <ConfirmAccount />
          </Route>
          <Route path="/users/check_before_reset_password/:token">
            <CheckBeforeResetPassword />
          </Route>
          <ProtectedRoute path="/users/set_password">
            <SetPassword />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard">
            <CookitDashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/weekkit">
            <Weekkit />
          </ProtectedRoute>
          <ProtectedRoute path="/setting">
            <Setting />
          </ProtectedRoute>
        </Switch>
        <Footer />
      </Container>
      </div>
    </Router>
  );
}

export default App;
