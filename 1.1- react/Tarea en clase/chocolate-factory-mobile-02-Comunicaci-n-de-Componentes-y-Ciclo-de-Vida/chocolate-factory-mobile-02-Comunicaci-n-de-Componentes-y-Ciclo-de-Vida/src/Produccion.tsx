import React, { Component } from 'react';

interface State {
  ciclo: string;
  produccion: number;
}

interface Props {
  onReportarProblema?: (problema: string) => void;
}

// Componente OompaLoompa
class OompaLoompa extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ciclo: 'constructor',
      produccion: 0
    };
  }

  componentDidMount() {
    this.setState({ ciclo: 'componentDidMount' });
  }

  componentDidUpdate() {
    this.setState({ ciclo: 'componentDidUpdate' });
  }

  componentWillUnmount() {
    this.setState({ ciclo: 'componentWillUnmount' });
  }

  aumentarProduccion = () => {
    this.setState(prevState => ({ produccion: prevState.produccion + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Ciclo de vida actual: {this.state.ciclo}</h1>
        <h2>Producción actual: {this.state.produccion}</h2>
        <button onClick={this.aumentarProduccion}>Aumentar Producción</button>
      </div>
    );
  }
}

export default OompaLoompa;
