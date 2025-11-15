import React from "react";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Fahim Abdullah</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Fahim Abdullah — JavaScript backend developer skilled in Node.js, Express, and MongoDB."
        />
      </Helmet>

      <Hero />
      <Skills />
    </>
  );
}

export default Home;
