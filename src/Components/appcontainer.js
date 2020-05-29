import React from "react";
import Search from "./search";
import ReposInfo from "./reposinfo";
import UserInfo from "./userinfo";
import Actions from "./actions";
import Repos from "./repos";

const AppContent = (props) => {
  return (
    <div className="app">
      <Search buscar={props.handleSearch} />
      <div className="Profile">
        {!!props.userinfo && (
          <UserInfo
            usuario={props.userinfo.usuario}
            foto={props.userinfo.foto}
            login={props.userinfo.login}
          />
        )}

        {!!props.userinfo && (
          <ReposInfo
            seguidores={props.userinfo.seguidores}
            seguindo={props.userinfo.seguindo}
            repositorios={props.userinfo.repositorios}
          />
        )}
      </div>

      {!!props.userinfo && (
        <Actions getRepos={props.getRepos} getStarred={props.getStarred} />
      )}

      {!!!props.repos.lenght && (
        <Repos
          classNome="repos"
          title="Repositórios Públicos"
          repo={props.repos}
        />
      )}

      {!!!props.starred.lenght && (
        <Repos classNome="starred" title="Favoritos" repo={props.starred} />
      )}
    </div>
  );
};

export default AppContent;
