import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./contact.css"
import { BsFillCaretDownFill } from 'react-icons/bs';
import { FcDeleteDatabase } from 'react-icons/fc';

 class Contact extends Component {

    state = {
        showContactToggle: true
    }

    showContact(fullName) {
        this.setState({
            showContactToggle: !this.state.showContactToggle
        })
    }
    onDeleteClick = () =>{
         this.props.deleteContactFromChild()
    }
    render() {
        const {name , tele, email, age } = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">   {name} {age} </h1>
                    <h2> 
                        <BsFillCaretDownFill onClick={this.showContact.bind(this, name)}  />
                        <FcDeleteDatabase onClick={this.onDeleteClick}  />
                    </h2>
                    
                    <span className="card-text">
                       {(this.state.showContactToggle) ? <ul className="list-group">
                            <li className="list-group-item">{tele}</li>
                            <li className="list-group-item">{email}</li>
                        </ul> : null  }
                                        
                    </span>
                </div>
            </div>     
        )
    }
}

Contact.defaultProps = {
    name: "my Name",
    tele: "0000000000",
    email: "my@email.com"
}

Contact.types = {
    data: PropTypes.object.isRequired,
    deleteContactFromChild: PropTypes.func.isRequired
    // name: PropTypes.string.isRequired,
    // // tele: PropTypes.number.isRequired,
    // // email: PropTypes.string
}


export default Contact;