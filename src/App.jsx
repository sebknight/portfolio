import React from 'react';
import About from './components/About';
import Column from './components/Column';
import Divider from './components/Divider';
import Header from './components/Header';
import Work from './components/Work';
import Footer from './components/Footer';
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Column background="white">
          <ExchangeRates />
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
