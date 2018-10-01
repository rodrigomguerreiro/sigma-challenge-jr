
import * as React from "react";

import {
  Page,
  Grid,
  Card,
  colors,
  Header,

} from "tabler-react";

import C3Chart from "react-c3js";

function Home() {
  return (
    <Page.Content title="Eleições 2018 ">
      <Header.H3>Intenção de voto no 1º turno para presidente:</Header.H3>
      <Grid.Row cards={true}>
        <Grid.Col md={12}>
          <Grid.Row>
            <Grid.Col sm={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Diputa Presidencial</Card.Title>
                </Card.Header>
                <Card.Body>
                  <C3Chart
                    style={{ height: "15rem" }}
                    data={{
                      columns: [
                        // each columns data
                        ["data1", 28],
                        ["data2", 22],
                        ["data3", 11],
                        ["data4", 10],
                        ["data5", 3],
                        ["data6", 2],
                        ["data7", 2],
                        ["data8", 1],
                        ["data9", 0],
                      ],
                      type: "bar", // default type of chart
                      colors: {
                        data1: colors["blue-darker"],
                        data2: colors["blue"],
                        data3: colors["blue-light"],
                        data4: colors["blue-lighter"],
                        data5: colors["red"],
                        data6: colors["white"],
                        data7: colors["purple"],
                        data8: colors["green"],
                        data9: colors["orange"],
                       
                      },
                      names: {
                        // name of each serie
                        data1: "Bolsonaro",
                        data2: "Haddad",
                        data3: "Ciro",
                        data4: "Alckmin",
                        data5: "Marina",
                        data6: "Amoêdo",
                        data7: "Meirelles",
                        data8: "Alvaro",
                        data9: "Outros",
                      },
                    }}
                    legend={{
                      show: true, //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0,
                    }}
                  />
                </Card.Body>
              </Card>
            </Grid.Col>
            
          </Grid.Row>
        </Grid.Col>

        
      </Grid.Row>
    </Page.Content>

  );
}

export default Home;
