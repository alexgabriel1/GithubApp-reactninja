'use strict'

import React from 'react'

const App = () => {
  return (
    <div className="app" >
      <div className="search">
        <input type="search" placeholder='Digite o nome do usuário' name="" id="" />
      </div>



      <div className="user-info">
        <img src='https://avatars2.githubusercontent.com/u/48251728?v=4' />
        <a href="https://github.com/AlexGabriel1/">
          <h1>Alex Gabriel</h1>
        </a>

        <ul className="repos-info">
          <li>Repositorios: 9</li>
          <li>Seguidores: 3</li>
          <li>Seguindo: 14</li>
        </ul>

        <div className="actions">
          <button>Ver Repositorios</button>
          <button>Ver Favoritos</button>
        </div>


        <div className="repos">
          <h2>Repositórios: </h2>
          <ul className="repos">
            <li><a href="#">Nome do Repositório</a></li>
          </ul>
        </div>

        <div className="starred">
          <h2>Favoritos:</h2>
          <ul>
            <li><a href="#">Nome do Repositório</a></li>
          </ul>

        </div>


      </div>
    </div>
  )
}


export default App





