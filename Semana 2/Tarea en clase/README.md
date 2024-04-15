# DeberesObjetos
PROPS
 // Componente OompaLoompa
function OompaLoompa(props) {
  return <h1>{props.mensaje}</h1>;
}

// Componente WillyWonka
function WillyWonka() {
  return <OompaLoompa mensaje="¡Buen dia señor willy wonka!" />;
}

ReactDOM.render(<WillyWonka />, document.getElementById('root'));

STATE
// Componente OompaLoompa
class OompaLoompa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { problema: "Nos falta mas mani" };
  }

  render() {
    return <h1>Problema: {this.state.problema}</h1>;
  }
}

ReactDOM.render(<OompaLoompa />, document.getElementById('root'));

EVENT
// Componente OompaLoompa
class OompaLoompa extends React.Component {
  reportarProblema = () => {
    this.props.onReportarProblema("¡Los caramelos se derriten demasiado rápido!");
  }

  render() {
    return <button onClick={this.reportarProblema}>Reportar Problema</button>;
  }
}

// Componente WillyWonka
class WillyWonka extends React.Component {
  manejarReporteDeProblema = (problema) => {
    alert(problema);
  }

  render() {
    return <OompaLoompa onReportarProblema={this.manejarReporteDeProblema} />;
  }
}

ReactDOM.render(<WillyWonka />, document.getElementById('root'));

