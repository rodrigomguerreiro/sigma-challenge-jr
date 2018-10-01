import React from "react";

import {
  Page,
  Form,
  List,
  Grid,
} from "tabler-react";

import Detalhes from "./Detalhes";

import TSEService from "../services/TSEService";

class DepEstadual extends React.Component {
  state = {
    depEstadual: [],
    isLoading: false,
    depEstadualBackup: [],
    inputSearch: "",
    depEstadual: null,
    isLoadingDetalhe: false
  }

  async componentWillMount() {

    this.setState({
      isLoading: true,
      depEstadual: [],
      depEstadualBackup: []
    })

    var canditadoList = await TSEService.getDepEstadual();

    this.setState({
      isLoading: false,
      depEstadual: canditadoList,
      depEstadualBackup: canditadoList
    })
  }

  filtrarPeloValorDoInput(evt) {
    var valorInput = evt.target.value;
    var candidadosFiltrados = this.state.depEstadualBackup.filter(function (item) {
      return item.nomeCompleto.indexOf(valorInput.toUpperCase()) !== -1;
    });

    this.setState({
      depEstadual: candidadosFiltrados,
      inputSearch: evt.target.value
    })
  }

  async  buscarDetalhe(idCandidato) {

    this.setState({
      isLoadingDetalhe: true,
      depEstadualDetalhe: null
    })

    var candidatoDetalhe = await TSEService.getCandidatoDetalhe(idCandidato);

    this.setState({
      isLoadingDetalhe: false,
      depEstadualDetalhe: candidatoDetalhe
    })
  }

  render() {
    if (this.state.isLoading) return (<h1>Carregando ...</h1>);

    var detalhesDoCandidato = null;

    if (this.state.isLoadingDetalhe) {
      detalhesDoCandidato = <h1>Carregando Detalhes</h1>
    } else if (this.state.depEstadualDetalhe != null) {
      detalhesDoCandidato = <Detalhes candidato={this.state.depEstadualDetalhe}></Detalhes>
    } else {
      detalhesDoCandidato = <h1></h1>;
    }

    return (
      <Page.Content title="Candidatos - Deputado Estadual de Mato Grosso">
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
                  {this.state.depEstadual.map((item, key) =>
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

export default DepEstadual;
