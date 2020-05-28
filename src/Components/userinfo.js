import React from "react";

const UserInfo = (props) => (
  <div className="user-info">
    <img src={props.foto} />
    <a href={`https://github.com/${props.login}/`} >
      <h1 class="userName">{props.usuario}</h1>
    </a>
  </div>
);
export default UserInfo;
