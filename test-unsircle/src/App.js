import React from 'react';
import { BrowserRouter as Router, Switch,  Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import landingPagePicture from './assets/landingPage.svg'
import NavbarPanel from './components/NavbarPanel'
import RegisterPanel from './views/RegisterPanel'
import LoginPanel from './views/LoginPanel'
import ForgotPassword from './views/ForgotPassword'
import './App.css';

function App() {
  const token = localStorage.token
  
  return (
    <div className="App">
      <Router>
        { token && <NavbarPanel/> }
        <Switch>
          <Route path="/gtw/register">
            <RegisterPanel/>
          </Route>
          <Route path="/gtw/login">
            <LoginPanel/>
          </Route>
          <Route path="/gtw/forgotPassword">
            <ForgotPassword/>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
