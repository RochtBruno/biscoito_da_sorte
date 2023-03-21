import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
    };
    this.frase = [
      "frase aleatória 1",
      "frase aleatória 2",
      "frase aleatória 3",
      "frase aleatória 4",
      "frase aleatória 5",
      "frase aleatória 6",
      "frase aleatória 7",
      "frase aleatória 8",
    ];
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }
  quebraBiscoito() {
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.frase.length);
    state.texto = this.frase[numAleatorio];
    this.setState(state);
  }
  render() {
    return (
      <div className="container">
        <img src={require("./assets/biscoito.png")} className="img"></img>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="texto__frase">{this.state.texto}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className="btn">
          {this.props.nome}
        </button>
      </div>
    );
  }
}

export default App;
