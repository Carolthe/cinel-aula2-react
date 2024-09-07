import './App.css'
import Pessoas from './componets/Pessoas'

import Cartao from './componets/Cartao'

// numero.map(numero => numero * 2)

function App() {
  const informacao = [
    {
      lastName:'Doe',
      firstName:'John',
      gender:'male',
      height:1.78,
      birth:"1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
    lastName:'Delores ',
    firstName:'Obrien',
    gender:'female',
    height:1.72,
    birth:"1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
 } ]

 const dados = [{
  img: "VIsa",
  number: "0123456789018845",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "BNP",
  namePeple: "Marcelo José"
 },
 {
 img: "VIsa",
 number: "0123456789018845",
 expirationMonth: 3,
 expirationYear: 2021,
 bank: "BNP",
 namePeple: "Marcelo José"
}]

  return (
    <div>

    {informacao.map(pessoas => <Pessoas pessoas={pessoas}/>)}
   
   {dados.map(teste => <Cartao teste={teste}/>)}   
    </div>
  )
}

export default App
