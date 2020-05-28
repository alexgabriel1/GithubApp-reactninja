import React from "react";

const ReposInfo = (props) => (
  <ul className="repos-info">
    <li>Repositorios: {props.repositorios}</li>
    <li>Seguidores: {props.seguidores}</li>
    <li>Seguindo: {props.seguindo}</li>
  </ul>
);

export default ReposInfo;
