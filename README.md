# Processo Seletivo Frontend Junior da Sigma/TJMT!

Esta aplicação foi desenvolvida utilizando a API do TSE (Tribunal Superior Eleitoral) como fonte de dados.


# Ferramentas

Foi utilizado a biblioteca [ReactJS ](https://reactjs.org/) e o conjunto UI Kit [Tabler](https://tabler.github.io/) . Com o objetivo de maximizar a produtividade e otimizar tempo no desenvolvimento, a aplicação utiliza o gerenciador de dependências Yanr, o projeto  foi criado utilizando o comando : 
 - npx create-react-app my-app
 

# Funcionalidades

De forma simples, a navegação e feita através do menu contendo os tipos de candidatos onde cada tipo representa uma respectiva rota e componente. 
-   Home rota = '/'
-   Tipos de candidatos(Presidente, Governador, Senador, Deputado Federal, Deputado Estadual) apresentam uma listagem e invocam o componente com os detalhes de cada tipo de candidato.


## API TSE

Api TSE neste caso, inviabilizou a construção de uma listagem com foto dos candidatos, ou seja,  para não deixar a aplicação pesada e realizando muitas requisições optei por manter da forma mais simplificada.


## A aplicação 'Democraticamente'
Esta aplicação está com as funcionalidades mais simples, ocorrerão atualizações e incrementos futuros.

## Dependências
Esta aplicação está com as funcionalidades mais simples, ocorrerão atualizações e incrementos futuros.

- "react": "^16.5.2",
- "react-c3js": "^0.1.20",
- "react-dom": "^16.5.2",
- "react-router-dom": "^4.3.1",
- "react-scripts": "1.1.5",
 - "tabler-react": "^1.19.1"
 
## Instalação
```
> git clone https://github.com/rodrigomguerreiro/sigma-challenge-jr.git
> cd < diretório do projeto >
> yarn install
> yarn start