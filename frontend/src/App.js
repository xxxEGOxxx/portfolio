import React, { useEffect } from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  OtherSkills,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <OtherSkills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
