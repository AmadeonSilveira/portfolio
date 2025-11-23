'use client';

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo.src} alt="Logo" className="header-logo" />
        <nav className="nav">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
