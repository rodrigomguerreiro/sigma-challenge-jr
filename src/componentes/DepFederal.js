import React from "react";

import {
  Page,
  Form,
  List,
  Grid,
} from "tabler-react";

import Detalhes from "./Detalhes";

import TSEService from "../services/TSEService";

class DepFederal extends React.Component {
  state = {
    depFederais: [],
    isLoading: false,
    depFederaisBackup: [],
    inputSearch: "",
    depFederalDetalhe: null,
    isLoadingDetalhe: false
  }

  async componentWillMount() {

    this.setState({
      isLoading: true,
      depFederais: [],
      depFederaisBackup: []
    })

    var canditadoList = await TSEService.getDepFederal();

    this.setState({
      isLoading: false,
      depFederais: canditadoList,
      depFederaisBackup: canditadoList
    })
  }

  filtrarPeloValorDoInput(evt) {
    var valorInput = evt.target.value;
    var candidadosFiltrados = this.state.depFederaisBackup.filter(function (item) {
      return item.nomeCompleto.indexOf(valorInput.toUpperCase()) !== -1;
    });

    this.setState({
      depFederais: candidadosFiltrados,
      inputSearch: evt.target.value
    })
  }

  async buscarDetalhe(idCandidato) {

    this.setState({
      isLoadingDetalhe: true,
      depFederalDetalhe: null
    })

    var candidatoDetalhe = await TSEService.getCandidatoDetalhe(idCandidato);

    this.setState({
      isLoadingDetalhe: false,
      depFederalDetalhe: candidatoDetalhe
    })
  }


  render() {
    if (this.state.isLoading) return (<h1>Carregando ...</h1>);

    var detalhesDoCandidato = null;

    if (this.state.isLoadingDetalhe) {
      detalhesDoCandidato = <h1>Carregando Detalhes</h1>
    } else if (this.state.depFederalDetalhe != null) {
      detalhesDoCandidato = <Detalhes candidato={this.state.depFederalDetalhe}></Detalhes>
    } else {
      detalhesDoCandidato = <h1></h1>;
    }

    return (
      <Page.Content title="Candidatos - Deputado Federal de Mato Grosso">
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
                  {this.state.depFederais.map((item, key) =>
                    <List.GroupItem action icon="user">
                      <a href="#" onClick={() => this.buscarDetalhe(item.id)}>
                        {item.numero} - {item.nomeCompleto} - {item.partido.sigla}
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

export default DepFederal;
