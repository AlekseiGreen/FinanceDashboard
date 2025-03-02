import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import File from './File.jsx';


// // Компоненты для страниц
// function File() {
//   return <h2>File</h2>;
// }

function Edit() {
  return <h2>Edit</h2>;
}

function Help() {
  return <h2>Help</h2>;
}

// Основной компонент приложения
function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<File />} />
          <Route path="/about" element={<Edit />} />
          <Route path="/contact" element={<Help />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
