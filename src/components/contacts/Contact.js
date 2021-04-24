import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./contact.css"

 class Contact extends Component {
    render() {
        const {name , tele, email, age } = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title"> {name} {age}</h1>
                    <span className="card-text">
                        <ul className="list-group">
                            <li className="list-group-item">{tele}</li>
                            <li className="list-group-item">{email}</li>
                        </ul>                   
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
    data: PropTypes.object.isRequired

    // name: PropTypes.string.isRequired,
    // // tele: PropTypes.number.isRequired,
    // // email: PropTypes.string
}


export default Contact;