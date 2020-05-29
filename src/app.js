"use strict";

import React from "react";
import ajax from "@fdaciuk/ajax";

import AppContent from "./Components/appcontainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch(e) {
    const usuario = e.target.value;
    const keyCode = e.which || e.keyCode;
    if (keyCode == 13) {
      ajax()
        .get(`https://api.github.com/users/${usuario}`)
        .then((result) => {
          this.setState({
            userinfo: {
              usuario: result.login,
              foto: result.avatar_url,
              repositorios: result.public_repos,
              seguidores: result.followers,
              seguindo: result.following,
            },
            repos: [],
            starred: [],
          });
        });
    }
  }

  getRepos(user) {
    ajax()
      .get(`https://api.github.com/users/${user}/repos`)
      .then((result) => {
        this.setState({
          repos: result.map((item, index) => {
            return { nome: item.name, url: item.html_url };
          }),
        });
      });
  }

  getStarred(user) {
    ajax()
      .get(`https://api.github.com/users/${user}/starred`)
      .then((result) => {
        this.setState({
          starred: result.map((item, index) => {
            return { nome: item.name, url: item.html_url };
          }),
        });
      });
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={() => this.getRepos(this.state.userinfo.usuario)}
        getStarred={() => this.getStarred(this.state.userinfo.usuario)}
      />
    );
  }
}

export default App;
