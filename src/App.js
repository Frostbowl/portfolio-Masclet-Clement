import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/main/Home';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <div><Header/></div>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      <div><Footer/></div>
    </div>
  );
}

export default App;
