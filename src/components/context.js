import React, { Component } from "react";

const context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "ayoub BOUYA",
        tele: "0111111111",
        email: "ayoub@gmail.com",
        age: 22,
      },
      {
        id: 2,
        name: "hamza AKKAR",
        tele: "02222222222",
        email: "hamza@gmail.com",
        age: 22,
      },
      {
        id: 3,
        name: "Ahmed ELHASNAOUI",
        tele: "033333333",
        email: "ahmed@gmail.com",
        age: 22,
      },
    ],
  };

  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
