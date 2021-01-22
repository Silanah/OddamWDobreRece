import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import HomeLogIn from './components/Navigation/HomeLogIn';
import HomeNavbar from './components/Navigation/HomeNavbar';
import Home from './components/Home';
import SignIn from './components/Sign/SignIn';
import SignUp from './components/Sign/SignUp';
import Logout from './components/Sign/Logout';

const App = () => {
  return (
    <Router>
      <div className='nav_wrapper'>
        <div className='topNavbar'>
          <HomeLogIn />
        </div>
        <div className='bottomNavbar'>
          <HomeNavbar />
        </div>
      </div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/logowanie' component={SignIn} />
        <Route path='/rejestracja' component={SignUp} />
        <Route path='/logout' component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
