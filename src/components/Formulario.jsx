import React, { useState } from 'react'

const Formulario = () => {

  

    
  return (
    <>
        <h2>Ingreso de Productos</h2>
    
        <form
            
        >
            <div>
                <label>Nombre:{" "}</label>
                <input
                    type='text'
                    placeholder='Ingresar el Nombre'
                    
                />
            </div>
            <div>
                <label>Modelo:{" "}</label>
                <input
                    type='number'
                    placeholder='Ingresar el Modelo'
                    
                />
            </div>
            <div>
                <label htmlFor='nombre'>Precio:{" "}$ {" "}</label>
                <input
                    id="nombre"
                    type='number'
                    placeholder='Ingresar el precio'
                  
                />
            </div>
            <div>
                <label>Fecha de alta:</label>
                <input
                    type='date'
                    placeholder='Ingresar la fecha'
                    
                />
            </div>
            <input
                type='submit'
                value="Agregar Producto"
            />
        </form>
    </>
  )
}

export default Formulario