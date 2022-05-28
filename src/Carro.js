import React from "react";
import Motor from "./Motor";
import Roda from "./Roda";

export default class Carro extends React.Component {
    render() {
      return (
      <div>
        <h2 style={{color:"black", fontSize:36}}>Meu carro: {this.props.modelo}</h2>
        <Motor potencia= {this.props.modelo}/>
        <Roda aro = {this.props.modelo} />
        <img
        style={{width:250}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgO-VJaBF2XyUKz-OToMFfeUPZrYPCNRl6xgmilDHFnvOj0YbxRF0kfQAyA3osvYDpig&usqp=CAUg"
        alt="ford Ka"/>
        <h2 style={{color:"black", fontSize:26}}> Nome: {this.props.nome}</h2>
      </div>
      );
    }
}