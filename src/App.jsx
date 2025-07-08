import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Hero from './sections/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
         <Products />
    </>
  );
};

export default App;
