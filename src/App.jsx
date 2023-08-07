import { useState } from 'react'
import './App.css'
import { Boton } from './components/Boton'
import Header from './components/Header'
import Productos from './components/Productos'
import Formulario from './components/Formulario'


function App() {

  const [clicks,setClicks] = useState(0)
  
  //Boolean
  const[evento,setEvento]=useState(false)

  const cambiador = ()=>{
    setEvento(!evento)
  }
  


  return (
    <>
     
      <Header/>

      <Formulario/>


    <br></br>
   

      <Productos
            nombre="Auto"
            precio="4000000"
      />
      <Productos
            nombre="Motocicleta"
            precio="2000000"
      />
      <Productos
            nombre="Bote"
            precio="300000"
      />

      
      
    </>


     
    
  )
}

export default App
