import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/Alert";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  // Searches for users with name
  searchUsers = async (nameText) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${nameText}&client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  // Search for a single user with name
  getUser = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`
    );
    this.setState({ loading: false, user: res.data });
  };

  // Get user Repos
  getUserRepos = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=9&sort=full_name&direction=desc&client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`
    );
    this.setState({ loading: false, repos: res.data });
  };

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 1300);
  };

  // Clear Everything
  clearAll = () => {
    this.setState({ users: [] });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      getUser={this.getUser}
                      setAlert={this.setAlert}
                      clearAll={this.clearAll}
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    loading={this.state.loading}
                    repos={this.state.repos}
                    getUserRepos={this.getUserRepos}
                  />
                )}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
