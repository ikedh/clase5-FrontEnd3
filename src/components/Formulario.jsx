import React, { useState } from 'react'

const Formulario = () => {

    const [nombre,setNombre]=useState('')
    const [modelo, setModelo] = useState ('')
    const [precio, setPrecio] = useState (0)
    const [fecha, setFecha] = useState (0)

 
  
    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre,modelo,precio,fecha].includes("")){
            console.log("esto está mal")
        }else{
            console.log("Todo ok");
        }
    }
    
  return (
    <>
        <h2>Ingreso de Productos</h2>
    
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <label>Nombre:{" "}</label>
                <input
                    type='text'
                    placeholder='Ingresar el Nombre'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
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