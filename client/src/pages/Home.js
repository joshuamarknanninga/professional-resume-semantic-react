// src/pages/Home.js

import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Your Name - Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Your Name, a Frontend Developer specializing in React."
        />
        <meta
          name="keywords"
          content="React, JavaScript, Frontend Developer, Portfolio, Your Name"
        />
      </Helmet>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
