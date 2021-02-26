import React from 'react';
import About from './components/About';
import Column from './components/Column';
import Divider from './components/Divider';
import Header from './components/Header';
import Work from './components/Work';
import Footer from './components/Footer';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Column background="white">
          <Work />
          <Divider />
          <About />
        </Column>
        <Footer />
      </div>  
    </ApolloProvider>
  );
}

export default App;
