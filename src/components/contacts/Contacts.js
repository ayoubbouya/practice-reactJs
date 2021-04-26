import React, { Component } from 'react'
import Contact from './Contact'
 
  
class Contacts extends Component {
    state = {
        users : [
            {id:1, name:"ayoub BOUYA", tele:"0111111111", email:"ayoub@gmail.com",age:22} ,
            {id:2, name:'hamza AKKAR', tele:'02222222222', email:'hamza@gmail.com',age:22},
            {id:3, name:'Ahmed ELHASNAOUI', tele:'033333333', email:'ahmed@gmail.com',age:22}

        ]
    }

    deleteContact(id) {
         const {contacts} = this.state;
         
         const newLists = contacts.filter((contact) => contact.id !== id)

         this.setState({
             contacts : newLists
         })
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                {users.map( (contact)  => ( 
                    <Contact  data = {contact} key={contact.id} deleteContactFromChild = {this.deleteContact.bind(this, contact.id)} /> 
                    
                    // name={contact.name}
                    // tele={contact.tele}
                    // email={contact.email}
                    
                ))}
             
            </div>
        )
    }
}

export default Contacts;