import React from 'react';
import About from '../components/About';
import Column from '../components/Column';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Work from '../components/Work';
import Footer from '../components/Footer';
import '../App.css';

export default function Home() {
  return (
      <div className="App">
        <Header />
        <Column background="white">
          <Work />
          <Divider />
          <About />
        </Column>
        <Footer />
      </div>  
  );
}
