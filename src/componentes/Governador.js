import React from "react";

import {
  Page,
  Form,
  List,
  Grid,
} from "tabler-react";

import Detalhes from "./Detalhes";

import TSEService from "./../services/TSEService";

class Governador extends React.Component {
  state = {
    governador: [],
    isLoading: false,
    governadorBackup: [],
    inputSearch: "",
    governadorDetalhe: null,
    isLoadingDetalhe: false
  }

  async componentWillMount() {

    this.setState({
      isLoading: true,
      governador: [],
      governadorBackup: []
    })

    var canditadoList = await TSEService.getGovernador();

    this.setState({
      isLoading: false,
      governador: canditadoList,
      governadorBackup: canditadoList
    })
  }

  filtrarPeloValorDoInput(evt) {
    var valorInput = evt.target.value;
    var candidadosFiltrados = this.state.governadorBackup.filter(function (item) {
      return item.nomeCompleto.indexOf(valorInput.toUpperCase()) !== -1;
    });

    this.setState({
      governador: candidadosFiltrados,
      inputSearch: evt.target.value
    })
  }

  async  buscarDetalhe(idCandidato) {

    this.setState({
      isLoadingDetalhe: true,
      presidenteDetalhe: null
    })

    var candidatoDetalhe = await TSEService.getCandidatoDetalhe(idCandidato);

    this.setState({
      isLoadingDetalhe: false,
      presidenteDetalhe: candidatoDetalhe
    })
  }

  render() {
    if (this.state.isLoading) return (<h1>Carregando ...</h1>);

    var detalhesDoCandidato = null;

    if (this.state.isLoadingDetalhe) {
      detalhesDoCandidato = <h1>Carregando Detalhes</h1>
    } else if (this.state.presidenteDetalhe != null) {
      detalhesDoCandidato = <Detalhes candidato={this.state.presidenteDetalhe}></Detalhes>
    } else {
      detalhesDoCandidato = <h1></h1>;
    }

    return (
      <Page.Content title="Candidatos - Governo de Mato Grosso">
        <Grid.Row>
          <Grid.Col md={12}>
            <Grid.Row>
              <Grid.Col sm={6}>
                <Form.Input
                  icon="search"
                  placeholder="Buscar"
                  position="append"
                  value={this.state.inputSearch} onChange={evt => this.filtrarPeloValorDoInput(evt)}
                />
                <List.Group >
                  {this.state.governador.map((item, key) =>
                    <List.GroupItem action icon="user">


                      <a href="#" onClick={() => this.buscarDetalhe(item.id)}>
                        {item.numero} - {item.nomeCompleto} - {item.partido.sigla} - {item.nomeColigacao}
                      </a>

                    </List.GroupItem>
                  )}
                </List.Group>
              </Grid.Col>

              {detalhesDoCandidato}

            </Grid.Row>

          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    );
  }

}

export default Governador;
