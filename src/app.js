"use strict";

import React from "react";

import Search from "./Components/search";
import ReposInfo from "./Components/reposinfo";
import UserInfo from "./Components/userinfo";
import Actions from "./Components/actions";
import Repos from "./Components/repos";

const App = () => {
  return (
    <div className="app">
      <Search />
      <div className="Profile">
        <UserInfo />
        <ReposInfo />
      </div>
      <Actions />
      <Repos
        classNome="repos"
        title="Repositórios Públicos"
        repo={[{ name: "Nome do repositório", link: "#" }]}
      />
      <Repos
        classNome="starred"
        title="Favoritos"
        repo={[{ name: "Nome do repositório", link: "#" }]}
      />
    </div>
  );
};

export default App;
