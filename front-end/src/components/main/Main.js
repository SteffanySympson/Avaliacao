import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import './Main.css';
import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';
import Home from '../pages/home/Home';




const Main = () =>{
  return (
    <div className="background">
      <Header />
      <Routes>
            <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main;