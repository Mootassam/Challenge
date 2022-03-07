import React from "react";
import { Header, Footer, Content } from "./components";
import "./App.css";
import { Navbar } from "./containers";
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
