// import React  from 'react'
import './App.css'
import Greeting from './Greeting'
import Eg from './Eg'
import DestructuringProps from './DestructuringProps'

export default function App() {
  const name = "Rahul"
  const city = "vijayawada"
  const num = "9052520552"

  const name2 = "Gowtham"
  const city2 = "VJA"
  const num2 = "5252"

  const name3 = "Kowshik"
  const city3 = "GUD"
  const num3 = "1234"

  return(
    <div className="App">

      <h1>Hello {name}</h1>
      <Greeting name ={name}/>
      <DestructuringProps name={name} city={city} num={num}/>
      <DestructuringProps name={name2} city={city2} num={num2}/>
      <DestructuringProps name={name3} city={city3} num={num3}/>

      <Greeting name ={name2}/>
      <Eg/>
    </div>
  );
}