import './App.css'
import Child from './Child'

export default function App() {
  
  let name = 'Gowtham'
  let city = 'Vijayawada'
  let age = 23
  let Mobile = '9052520552'
  let Address = 'Vijayawada, Andhra Pradesh-520003'

  let name2 = 'Rahul'
  let city2 = 'Bezawada'
  let age2 = 22
  let Mobile2 = '9912309015'
  let Address2 = 'Bezawada, Andhra Pradesh'

  let name3 = 'Kowshik'
  let city3 = 'Gudivada'
  let age3 = 23
  let Mobile3 = '9955441122'
  let Address3 = 'Gudivada, Andhra Pradesh'

  let name4 = 'Kedhar'
  let city4 = 'Auto-Nagar'
  let age4 = 24
  let Mobile4 = '9988771122'
  let Address4 = 'Benz Circle, Auto-Nagar, Andhra Pradesh'

  let name5 = 'Siva'
  let city5 = 'Mangalgiri'
  let age5 = 23
  let Mobile5 = '8844775522'
  let Address5 = 'Gunur, Andhra Pradesh'
  return (
    <div className="App">
      <h1>Task 2</h1>
      <div className="cards">
      <Child name={name} city={city} age={age} Mobile={Mobile} Address={Address} />
      <Child name={name2} city={city2} age={age2} Mobile={Mobile2} Address={Address2} />
      <Child name={name3} city={city3} age={age3} Mobile={Mobile3} Address={Address3} />
      <Child name={name4} city={city4} age={age4} Mobile={Mobile4} Address={Address4} />
      <Child name={name5} city={city5} age={age5} Mobile={Mobile5} Address={Address5} />
      </div>
    </div>
  )
}