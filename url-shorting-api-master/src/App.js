import React from "react";
import { Header, Footer } from "./components";
import "./App.css";
import { Navbar } from "./containers";
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
