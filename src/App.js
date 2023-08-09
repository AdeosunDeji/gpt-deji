import React from "react";
import {
  Blog,
  Header,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";
import { Cta, Brand, Navbar } from "./componets";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
