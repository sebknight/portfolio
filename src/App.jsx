import React from "react";
import About from "./components/About";
import Column from "./components/Column";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Header />
        <Column background="white">
          <Projects />
          <About />
        </Column>
        <Footer />
      </div>
  );
}

export default App;
