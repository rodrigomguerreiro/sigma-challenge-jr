import React from "react";

import {
  Page,
  Form,
  List,
  Grid,
} from "tabler-react";

import Detalhes from "./Detalhes";

import TSEService from "../services/TSEService";

class Senador extends React.Component {
  state = {
    senador: [],
    isLoading: false,
    senadorBackup: [],
    inputSearch: "",
    senadorDetalhe: null,
    isLoadingDetalhe: false
  }

  async componentWillMount() {

    this.setState({
      isLoading: true,
      senador: [],
      senadorBackup: []
    })

    var canditadoList = await TSEService.getSenador();

    this.setState({
      isLoading: false,
      senador: canditadoList,
      senadorBackup: canditadoList
    })
  }

  filtrarPeloValorDoInput(evt) {
    var valorInput = evt.target.value;
    var candidadosFiltrados = this.state.senadorBackup.filter(function (item) {
      return item.nomeCompleto.indexOf(valorInput.toUpperCase()) !== -1;
    });

    this.setState({
      senador: candidadosFiltrados,
      inputSearch: evt.target.value
    })
  }

  async  buscarDetalhe(idCandidato) {

    this.setState({
      isLoadingDetalhe: true,
      senadorDetalhe: null
    })

    var candidatoDetalhe = await TSEService.getCandidatoDetalhe(idCandidato);

    this.setState({
      isLoadingDetalhe: false,
      senadorDetalhe: candidatoDetalhe
    })
  }


  render() {
    if (this.state.isLoading) return (<h1>Carregando ...</h1>);

    var detalhesDoCandidato = null;

    if (this.state.isLoadingDetalhe) {
      detalhesDoCandidato = <h1>Carregando Detalhes</h1>
    } else if (this.state.senadorDetalhe != null) {
      detalhesDoCandidato = <Detalhes candidato={this.state.senadorDetalhe}></Detalhes>
    } else {
      detalhesDoCandidato = <h1></h1>;
    }
    return (
      <Page.Content title="Candidatos - Senador de Mato Grosso">
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
                  {this.state.senador.map((item, key) =>
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

export default Senador;
