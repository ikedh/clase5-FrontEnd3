
/* Ejemplo Class Component */

import React, { Component } from 'react'

class Productos extends Component{



  constructor(){
    super()

    this.state = {
      cantidad: 0,
    }
  }


  render(){
    return(
      <>
        <div className='contenedor-producto'>
            <h2>Nombre: {this.props.nombre} </h2>
            <hr/>
            
            <p>Precio: $ {this.props.precio}</p>
            <hr/>
            <div>Cantidad: {this.state.cantidad}</div>
            <button
              onClick={()=>{
                this.setState({cantidad: this.state.cantidad + 1})
              }}
            >Agregar</button>
        </div>
    </>
    )
  }
}

export default Productos;