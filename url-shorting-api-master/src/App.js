import React from "react";
import { Header, Footer, Content, PreFooter } from "./components";
import "./App.css";
import { Navbar } from "./containers";
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Content />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
