import React from "react";

import {
  Page,
  Form,
  List,
  Grid,
} from "tabler-react";

import Detalhes from "./Detalhes";

import TSEService from "./../services/TSEService";

class Presidentes extends React.Component {
  state = {
    presidentes: [],
    isLoading: false,
    presidentesBackup: [],
    inputSearch: "",
    presidenteDetalhe: null,
    isLoadingDetalhe: false
  }

  async componentWillMount() {

    this.setState({
      isLoading: true,
      presidentes: [],
      presidentesBackup: []
    })

    var canditadoList = await TSEService.getPresidentes();

    this.setState({
      isLoading: false,
      presidentes: canditadoList,
      presidentesBackup: canditadoList
    })
  }

  filtrarPeloValorDoInput(evt) {
    var valorInput = evt.target.value;
    var candidadosFiltrados = this.state.presidentesBackup.filter(function (item) {
      return item.nomeCompleto.indexOf(valorInput.toUpperCase()) !== -1;
    });

    this.setState({
      presidentes: candidadosFiltrados,
      inputSearch: evt.target.value
    })
  }


  async  buscarDetalhe(idCandidato) {

    this.setState({
      isLoadingDetalhe: true,
      presidenteDetalhe: null
    })

    var candidatoDetalhe = await TSEService.getPresidenteDetalhe(idCandidato);

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
      detalhesDoCandidato = <h3>Vote Consciente</h3>;
    }

    return (
      <Page.Content title="Candidatos a Presidência">
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
                  {this.state.presidentes.map((item, key) =>
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

export default Presidentes;
