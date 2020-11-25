import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './sharedComponents/layout/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';


class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Dashboard} />
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
