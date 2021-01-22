import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import SignIn from './components/Sign/SignIn';
import SignUp from './components/Sign/SignUp';
import Logout from './components/Sign/Logout';

const App = () => {
  return (
    <Router>
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
