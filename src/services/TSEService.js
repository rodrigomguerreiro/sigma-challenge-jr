const PRESIDENTE = 1;
const GOVERNADOR = 3;
const SENADOR = 5;
const DEPUTADOFEDERAL = 6;
const DEPUTADOESTADUAL = 7;

class TSEService {
  async getPresidentes() {

    const response = await fetch(this.getUrlCandidatos(PRESIDENTE), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data.candidatos;
  }

  async getPresidenteDetalhe(idCandidato) {

    var url = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/BR/2022802018/candidato/${idCandidato}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  async getCandidatoDetalhe(idCandidato) {

    var url = `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018/MT/2022802018/candidato/${idCandidato}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  getUrlCandidatos(tipoCandidato) {
    return `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/${tipoCandidato}/candidatos`
  }

  getUrlCandidatoE(tipoCandidatoE) {
    return `http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/${tipoCandidatoE}/candidatos`
  }

  async getGovernador() {

    const response = await fetch(this.getUrlCandidatoE(GOVERNADOR), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data.candidatos;
  }

  async getSenador() {

    const response = await fetch(this.getUrlCandidatoE(SENADOR), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data.candidatos;
  }

  async getDepFederal() {

    const response = await fetch(this.getUrlCandidatoE(DEPUTADOFEDERAL), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data.candidatos;
  }

  async getDepEstadual() {

    const response = await fetch(this.getUrlCandidatoE(DEPUTADOESTADUAL), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`ERRO NA API, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data.candidatos;
  }

}

export default new TSEService();