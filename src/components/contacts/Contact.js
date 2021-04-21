import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./contact.css"

 class Contact extends Component {
    render() {
        const {name , tele, email } = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title"> {name}</h1>
                    <p className="card-text">
                        <ul className="list-group">
                            <li className="list-group-item">{tele}</li>
                            <li className="list-group-item">{email}</li>
                        </ul>                   
                    </p>
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
    name: PropTypes.string.isRequired,
    tele: PropTypes.number.isRequired,
    email: PropTypes.string
}


export default Contact;