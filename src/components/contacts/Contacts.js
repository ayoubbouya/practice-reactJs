import React, { Component } from 'react'
import Contact from './Contact'
  
class Contacts extends Component {
    state = {
        contacts : [
            {id:1, name:"ayoub BOUYA", tele:"0111111111", email:"ayoub@gmail.com"} ,
            {id:2, name:'hamza AKKAR', tele:'02222222222', email:'hamza@gmail.com'},
            {id:3, name:'Ahmed ELHASNAOUI', tele:'033333333', email:'ahmed@gmail.com'}

        ]
    }
    render() {
        const {contacts} = this.state;
        return (
            <div>
                {contacts.map(contact => ( 
                    <Contact 
                    data = {contact}
                    // name={contact.name}
                    // tele={contact.tele}
                    // email={contact.email}
                    /> 
                ))}
               
            </div>
        )
    }
}

export default Contacts;