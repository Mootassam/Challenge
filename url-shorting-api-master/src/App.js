import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import { Navbar } from "./containers";
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
