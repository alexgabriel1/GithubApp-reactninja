import React from "react";




const Search = (props) => (
  <div className="search">
    <input type="search"
      placeholder="Digite o nome do usuário"
      name=""
      id=""
      onKeyUp={props.buscar}

    />
  </div>
);

export default Search;
