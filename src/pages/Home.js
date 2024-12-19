// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
    </main>
  );
};

export default Home;
