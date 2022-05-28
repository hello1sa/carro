import React from 'react';
import './style.css';
import Carro from './Carro';
import Motor from './Motor';
import Roda from './Roda';
import Calcular from './Calcular'

function Welcome(props) {
  return (
    <h1 style={{ color: 'black', fontSize: 36, background: 'grey' }}>
      Olá, {props.name}!{' '}
    </h1>
  );
}
function App(props) {
  return (
    <div>
      <Welcome name="heloisa" />
      <Welcome name="Vitória" />

      <Carro
        modelo="Relâmpago Mcqueen"
        nome="Fusion"
        Motor="10"
        potencia="1.3"
        Roda
        aro="17"
      />
      <Carro modelo="Opala" nome="Opala 79" />
      <Calcular/>
    </div>
  );
}

export default App;
