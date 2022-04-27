import React from 'react';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
