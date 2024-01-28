import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/layout/navbar/navbar';
import Footer from './components/layout/footer/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
