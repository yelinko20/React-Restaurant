import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NavIcon from "./components/NavIcon";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
