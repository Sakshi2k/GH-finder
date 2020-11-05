import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from './context/github/githubState';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import Navbar from "./components/Navbar";
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
          <Navbar />
          <div className='App'>
            <div className='container'>
              <Alert alert={this.state.alert} />
              <Switch>
                <Route exact path='/'><Home setAlert={this.setAlert} /></Route>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route path='/' component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </GithubState >
    );
  }
}

export default App;

