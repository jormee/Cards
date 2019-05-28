import React from 'react';
import './App.css';
import 'tachyons';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';

const App = () => {
  return (
    <div className="db">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
