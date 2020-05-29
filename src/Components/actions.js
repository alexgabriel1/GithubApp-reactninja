import React from "react";

const Actions = (props) => (
  <div className="actions">
    <button onClick={() => props.getRepos()}>Ver Repositorios</button>
    <button onClick={() => props.getStarred()}>Ver Favoritos</button>
  </div>
);
export default Actions;
