'use strict'

import React, { Component } from 'react'

import Titulo from './title'
import Title from './title'
import Bottao from './button'


class App extends Component {
  constructor() {  // construtor primeiro método inicializado com a classe
    super(); // metodo construtor do state
    this.state = {
      texto: '',
      check: false,
    }
  }

  handleCheck(e) {
    this.setState({
      check: !this.state.check
    })
    console.log(this.state.check)
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.state.texto} onChange={(e) => this.setState({ texto: e.target.value })} />
          <input type='checkbox' checked={this.state.check} onChange={(e) => this.handleCheck(e)} />
        </form>
        <h1>{this.state.texto}</h1>
        <br />

      </div >
    )
  }
}


export default App






// Lifecycle Montagem / Desmontagem / Atualização
  // componentWillMount() { // Executado antes do componente ser renderizado
  //   this.tmp = setInterval(() => {
  //     this.setState({ timer: this.state.timer + 1 });
  //   }, 1000)
  // }
  // componentDidMount() { // Executado depois do componente ser renderizado
  //   console.log("foi montado")
  // }
  // componentWillUnmount() {  // Executado quando o componente é retirado
  //   console.log('desmontado')
  // }
  // componentWillReceiveProps(nextProps) { // Executado quando o componente recebe novos valores nas props
  //   console.log('Will Receive Props')
  //   console.log(nextProps)
  // }
  // shouldComponentUpdate(nextProps, nextState) { // Executado para verficiar as alterações no componente
  //   console.log('shouldComponentUpdate')
  //   console.log(nextProps, ' ', nextState)
  //   return true
  // }
  // componentWillUpdate(nextProps, nextState) { // É executado antes do componente ser renderizado novamente
  //   console.log('WillUpdate')
  //   console.log(nextProps, ' ', nextState)
  // }
  // componentDidUpdate(prevProps, nextState) { // Executado após a nova renderização do componente
  //   console.log('Did Update ', nextState)
  // }