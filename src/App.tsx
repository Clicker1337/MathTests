import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Home } from './pages/Home/Home';
import { Constructor } from './pages/Constructor/Constructor';
import { Auth } from './pages/Auth/Auth';


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/"  element={ <Home/> }/>
        <Route path="/constructor"  element={ <Constructor/> }/>
        <Route path="/auth"  element={ <Auth/> }/>
      </Routes>
      </div>
  );
}

export default App;
