
import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
      <h1>Welcome to My Next.js App</h1>
      <nav>
        <a href="#about" style={{ marginRight: '10px', color: 'white' }}>About</a>
        <a href="#contact" style={{ color: 'white' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
