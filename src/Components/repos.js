import React from "react";

const Repos = (props) => (
  <div className={props.classNome}>
    <h2>{props.title}</h2>
    <ul className={props.classNome}>
      {props.repo.map((repositorio, index) => {
        return (
          <li key={index}>
            <a href={repositorio.link}>
              {index + 1} - {repositorio.name}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Repos;
