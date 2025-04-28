import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Team from "./components/teams/Teams";
import Brands from "./components/brands/Brands";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";

import "./index.css";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Brands />
        <Features />
        <Team />
      </div>
      <div className="bg-gray">
        <div className="container">
          <Blogs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
