import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Work from './components/Work';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <Skills />
      <About />
    </div>
  );
}

export default App;
