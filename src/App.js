import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import GithubState from './context/github/githubState';

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import AppNavbar from "./components/Navbar";
import Alert from "./components/Alert";
import User from "./components/users/User";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    alert: null,
  };

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 1300);
  };

  render() {
    return (
      <GithubState >
        <Router>
          <AppNavbar setAlert={this.setAlert} />
          <div className='App'>
            <div className='container'>
              <Alert alert={this.state.alert} />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route path='/' component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </GithubState >
    );
  }
}

export default App;

