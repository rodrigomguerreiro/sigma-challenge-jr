// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Site } from "tabler-react";

const navBarItems = [
  { value: "Home", to: "/home", icon: "home", LinkComponent: withRouter(NavLink) },
  {
    value: "Presidente", to: "/presidente", icon: "user", LinkComponent: withRouter(NavLink) },
  {
    value: "Governador", to: "/governador", icon: "user", LinkComponent: withRouter(NavLink)
  },
  {
    value: "Senador", to: "/senador", icon: "user", LinkComponent: withRouter(NavLink)
  },

  {
    value: "Deputado Federal", to: "/dep-federal", icon: "user", LinkComponent: withRouter(NavLink),
  },
  {
    value: "Deputado Estadual", to: "/dep-estadual",icon: "user", LinkComponent: withRouter(NavLink),
  },
];

class SiteWrapper extends React.Component {
  render() {
    return (
      <Site.Wrapper
      headerProps={{
        href: "/",
        alt: "Democratico",
        imageURL: "./logo.png",
      }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          copyright: (
            <React.Fragment>
              Copyright © 2018
              <a href="https://github.com/rodrigomguerreiro"> Rodrigo Guerreiro</a>
              {" "}
              Todos Direitos Reservados
            </React.Fragment>
          )
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
