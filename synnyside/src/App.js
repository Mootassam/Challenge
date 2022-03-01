import logo from "./logo.svg";
import "./App.css";
import { About, Contact, Header, Project, Services } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Project />
      <Contact />
    </>
  );
}

export default App;
