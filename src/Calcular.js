import React, { useState } from 'react';

export default function Calcular() {
  const [Carro1, setCarro1] = useState(0);
  const [Carro2, setCarro2] = useState(0);
  const [operador, setOperador] = useState('+');
  const [result, setResult] = useState(0);

  const FuncCalcular = () => {
    const a = parseFloat(Carro1);
    const b = parseFloat(Carro2);

    let result;
    if (operador === '+') {
      result = a + b;
    } else if (operador === '-') {
      result = a - b;
    } else if (operador === '/') {
      result = a / b;
    } else if (operador === '*') {
      result = a * b;
    }
    console.log('O Resultado é: ' + result);
    alert('O Resultado é: ' + result);

    setResult(result);
  };

  return (
    <div>
      <form onSubmit={FuncCalcular}>
        <label>Valor do carro 1: </label>
        <input
          type="text"
          min="0"
          onChange={(e) => {
            setCarro1(e.target.value);
          }}
          value={Carro1}
        />
        <br />
        <label>Valor do carro 2: </label>
        <input
          type="text"
          min="0"
          onChange={(e) => {
            setCarro2(e.target.value);
          }}
          value={Carro2}
        />
        <br />
        <label>Operador: </label>
        <select
          onChange={(e) => {
            setOperador(e.target.value);
          }}
          value={operador}
        >
          <option value="+">+</option>
          <option value="-">-</option>

        </select>
        <br />
        <input type="submit" value="Calcular" />
        <h3>
          RESULTADO:
          <br />
          {Carro1} {operador} {Carro2} = {result}
        </h3>
      </form>
    </div>
  );
}
