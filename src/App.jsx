import { useState } from 'react'


import './App.css'

function App() {

  
    const [inputValue, setInputValue] = useState('')
    const [tipInputValue, setTipInputValue] = useState('')
    const [result, setResult] = useState(null)

    const handleChange = (event) => {
      setInputValue(event.target.value)
    }

    const tipChangeFive = () => {
      const newValue = inputValue * 0.05
      setTipInputValue(newValue)
    }
    const tipChangeTen= ()=>{
      const newValue = inputValue * 0.10
      setTipInputValue(newValue)
    }
    const tipChangeFifteen = () => {
      const newValue = inputValue * 0.15
      setTipInputValue(newValue)
    }
    const tipChangeTwenty = () => {
      const newValue = inputValue * 0.20
      setTipInputValue(newValue)
    }

    const calculateSum = () => {
      const sum = parseFloat(inputValue) + parseFloat(tipInputValue)
      setResult(sum)
    }
  
  return (
    <>
    <div className='title'>
      <h1>Calculadora de propinas</h1>
    </div>
    <div className='container'>
      <label>Pon tu cuenta aquí:</label>
      <input type='text' value={inputValue} onChange={handleChange}></input>
      
      <div className='items'>
        <button onClick={tipChangeFive}>5%</button>
        <button onClick={tipChangeTen}>10%</button>
        <button onClick={tipChangeFifteen}>15%</button>
        <button onClick={tipChangeTwenty}>20%</button>
      </div>
      <div>
        
        <p>Precio de la cuenta:{inputValue}€</p>
        <p>Cantidad de la propina:{tipInputValue}€</p>
        <button onClick={calculateSum}>Calcular suma</button>
        <p className='finalPrice'>Total a pagar:{result}€</p>
      </div>
      
    </div> 
    </>
  )
}


export default App
