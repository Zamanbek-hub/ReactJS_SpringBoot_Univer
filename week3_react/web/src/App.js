import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardsRow from './components/Cards/CardsRow';
import CardTasks from './components/CardTasks/CardTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CardsRow}></Route>
        <Route exact path="/card/:id" component={CardTasks}></Route>
      </Switch>
      </div>
     </Router>
  );
}

export default App;



