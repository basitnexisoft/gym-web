import React from 'react';
import Navbar from './components/Navbar'; // corrected import path
import Home from './components/Home'; // corrected import path
import Plans from './components/Plans';
import About from './components/About';
import Trainers from './components/trainers';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="plans">
          <Plans />
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="trainers">
        <Trainers/>
        </div>

        <div id="contact">
          <Contact/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;


