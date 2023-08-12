import React from 'react';
import { AboutUs, FindUs, Gallery, Header, Intro, SpecialMenu } from './container'
import { Footer, Navbar } from './components'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

