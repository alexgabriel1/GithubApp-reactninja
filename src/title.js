import React, { Component } from 'react'


const Titulo = (props) => (<h1>{props.number}</h1>)




Titulo.defaultProps = {
  number: 404,
}

const onHandleClick = (a) => {
  console.log(a)
}

class Title extends Component {
  render() {
    return (
      <div className='main'  >
        <h1 onClick={(e) => onHandleClick('teste')}>Title</h1>
      </div>
    )
  }
}



export default Title