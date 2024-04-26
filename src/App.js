import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/main/Home';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Creation from './pages/main/creation';
import Contact from './pages/main/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/creation' element= {<Creation/>}/>
        <Route path='/contact' element= {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
