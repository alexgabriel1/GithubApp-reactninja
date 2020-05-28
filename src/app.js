"use strict";

import React from "react";
import ajax from "@fdaciuk/ajax";


import AppContent from "./Components/appcontainer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [{
        link: '#',
        nome: 'Meus Repositórios'
      },],
      starred: [{
        link: '#',
        nome: 'Repositórios Favoritos'
      },],
    }


  }

  handleSearch(e) {
    const usuario = e.target.value
    const keyCode = e.which || e.keyCode
    if (keyCode == 13) {
      ajax().get(`https://api.github.com/users/${usuario}`)
        .then((result) => {
          this.setState({
            userinfo: {
              usuario: result.username,
              foto: result.avatar_url,
              repositorios: result.public_repos,
              seguidores: result.followers,
              seguindo: result.following,
            }
          })

        })
    }

  }








  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />

    );
  }

};

export default App;
