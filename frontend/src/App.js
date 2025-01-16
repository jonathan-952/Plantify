import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/routes';
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App;
