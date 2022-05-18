import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';



const element ='Dgital inovation';
const element2 = <h1>Olá Turma =D</h1>;

function App2() {
  return(
    <div>
      {element}
      {element2}
    </div>
  )
}

function soma(num1, num2){
  return(
    alert(num1+num2)
  )
}

function App3() {
  return(
    <div>
      <Button onClick={()=> soma(10,5)} name="Somar 10 + 5"/>
      <ComponentA>
        <ComponentB>
          <Button onClick={()=> soma(5,5)} name="Somar 5 + 5"/>
        </ComponentB>
      </ComponentA>
    </div>
  )
}

class App4 extends Component{
  constructor(props){
    super(props)

    this.state = {
      clock:1000,
      copo: 'água'

    }
  }

  componentDidMount(){
    window.setTimeout( ()=>{
      this.setState({
        copo:'suco'
      })
    },3000)
  }

  alterarCopo = () => {
    this.setState({
      copo:'refrigerante'
    })
  }

  render(){
    const {clock, copo} = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}> {copo}</button>

      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App4/>
  
);

// Funções Rodadas durante o curso
//<App /> puxa  o App.js
//<App2/> executa a funcao App2 --> renderização de elementos
//<App3/> executa a funcao App3 --> renderização de elementos com children




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
