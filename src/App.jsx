
import { useState } from 'react'
import './App.css'

function App() {

  
  
  

  return (
    <>
    <div>
      <h1>Calculadora de propinas</h1>
    </div>
    <div>
      <input type='number' name='price' ref='price'></input>

      <div>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>20%</button>
      </div>
      <div>
        <button>Calcular</button>
        <p>Cantidad de la propina:</p>
        <p>Total a pagar:</p>
      </div>
      
    </div> 
    </>
  )
}

export default App
