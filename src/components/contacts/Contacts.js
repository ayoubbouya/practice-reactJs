import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  deleteContact(id) {
    const { contacts } = this.state;

    const newLists = contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts: newLists,
    });
  }

  render() {
    return (
      <Consumer>
        {(value) => (
          <div>
            {value.contacts.map((contact) => (
              <Contact
                data={contact}
                key={contact.id}
                deleteContactFromChild={this.deleteContact.bind(
                  this,
                  contact.id
                )}
              />

              // name={contact.name}
              // tele={contact.tele}
              // email={contact.email}
            ))}
          </div>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
