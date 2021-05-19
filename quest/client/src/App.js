import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Main from './components/Main/Main';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Header from './components/Header/Header';
import QuestCreate from './components/Main/Quests/Quest/QuestCreate';
import TaskCreate from './components/Main/Tasks/Task/TaskCreate';
import QuestPage from './components/Main/Quests/Quest/QuestPage';
import MyQuestPage from './components/Main/Quests/MyQuests/MyQuest/MyQuestPage';
import Favorites from './components/Main/Favorites/Favorites';

function App() {
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
  
  return (
    <Router>
    <div>
    <Header />
    <Switch>
      <ProtectedRouteAuthroize exact path="/register" component={Register}></ProtectedRouteAuthroize>
      <ProtectedRouteAuthroize exact path="/login" component={Login}></ProtectedRouteAuthroize>
      <ProtectedRouteUnAuthroize exact path="/"  component={Main}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/create"  component={QuestCreate}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/create_task/:quest_id?/:task_order?"  component={TaskCreate}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/my_quest/:id?"  component={MyQuestPage}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/quest/:id?"  component={QuestPage}></ProtectedRouteUnAuthroize>
      <ProtectedRouteUnAuthroize exact path="/favorites/:quest_id?"  component={Favorites}></ProtectedRouteUnAuthroize>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
