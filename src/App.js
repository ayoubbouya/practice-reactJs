import React, { Component } from 'react'
import Heading from './components/Heading';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/contacts/Contacts';


function App() {
  return (
    <div className="App">
     {/* <Heading /> */}
     <Navbar title="React JS" />
     <Contacts />
    </div>
  );
}

export default App;
