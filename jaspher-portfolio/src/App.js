import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './components/layout/navbar/navbar';
import Footer from './components/layout/footer/footer';
import Routeway from './components/route/route';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routeway/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
