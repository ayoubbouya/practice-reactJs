import React from 'react'
import Navbar from './components/navbar/Navbar';
import Contacts from './components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
