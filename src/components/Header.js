import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
