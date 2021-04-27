import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "./components/context";

function App() {
  return (
    <Provider>
      <div className='App'>
        {/* <Heading /> */}
        <Navbar title='React JS' />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
