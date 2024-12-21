import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Slills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen">
      <Header />
      <div className="pt-20"> {/* Отступ для хедера */}
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;