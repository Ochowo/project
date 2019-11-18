import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form/form';
import Board from './dragandDrop/board';
import Dashboard from './dashboard/dashboard';
import Company from './dashboard/company';
import Modal from './dashboard/modal';
import Todo from './todo/todo';
import Home from './home/home';
import {
 BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
  <div>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/form" component={Form} />
  <Route exact path="/board" component={Board} />
  <Route exact path="/dashboard" component={Dashboard} />
  <Route exact path="/company" component={Company} />
  <Route exact path="/company/:name" component={Modal} />
  <Route exact path="/todo" component={Todo} />
  </Switch>
  </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));