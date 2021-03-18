import React, {Component} from "react";
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import UpdateProfile from './components/Login/UpdateProfile';
import Guest from './components/Login/Guest';
import Navbar from './components/Navbar/Navbar';
import CardsRow from './components/Cards/CardsRow';
import CardTasks from './components/CardTasks/CardTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Card from "./components/Cards/Card/Card";


class ProtectedRouteUnAuthroize extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          localStorage.getItem('jwtToken') ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )} 
      />
    )
  }
}

class ProtectedRouteAuthroize extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          localStorage.getItem('jwtToken') ?
          <Redirect to='/' />
          :
          <Component {...props} />
        )} 
      />
    )
  }
}


function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <ProtectedRouteAuthroize exact path="/register" component={Register}></ProtectedRouteAuthroize>
        <ProtectedRouteAuthroize exact path="/login" component={Login}></ProtectedRouteAuthroize>
        <ProtectedRouteUnAuthroize exact path="/update_profile" component={UpdateProfile}></ProtectedRouteUnAuthroize>
        <ProtectedRouteUnAuthroize exact path="/"  component={CardsRow}></ProtectedRouteUnAuthroize>
        <ProtectedRouteUnAuthroize exact path="/card/:id" component={CardTasks}></ProtectedRouteUnAuthroize>
      </Switch>
      </div>
     </Router>
  );
}

export default App;



