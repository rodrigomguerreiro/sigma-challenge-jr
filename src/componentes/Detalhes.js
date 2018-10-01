import React, { Component } from "react";

import {
  ContactCard,
  Grid
} from "tabler-react";

//import TSEService from "./../services/TSEService";

class Detalhes extends Component {


  render() {
  console.log(this.props.candidato);
    return (
      <Grid.Col sm={6}>
      <ContactCard
        avatar={1}
        cardTitle="Detalhes do Candidato"
        rounded
        objectURL={this.props.candidato.fotoUrl}
        alt="Foto Candidado"
        name={this.props.candidato.nomeCompleto}
        address={{
          line1: "Número: " + this.props.candidato.numero,
          line2: this.props.candidato.nomeColigacao,
        }}
        details={[
          { title: "Partido", content: this.props.candidato.partido.sigla},
          { title: "Ocupação Atual", content: this.props.candidato.ocupacao},
          { title: "Candidatura",  content: this.props.candidato.descricaoSituacao}
        ]}
        description={{title:'Vices', content: this.props.candidato.vices != null ? this.props.candidato.vices.map((item, key) => {
          if(key +1 == this.props.candidato.vices.length){
            return `${item.nm_CANDIDATO}.`
          }else{
            return `${item.nm_CANDIDATO}, `
          }

        }) : "N/A"}}
      />
    </Grid.Col>
    )
  }
}

export default Detalhes;
