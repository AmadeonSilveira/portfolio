'use client';

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img 
          src={logo.src} 
          alt="Logo de Karin Andrade Silveira" 
          className="header-logo" 
        />
        <nav className="nav" role="navigation" aria-label="Navegação secundária">
          <a href="#sobre" aria-label="Ir para a seção Sobre">Sobre</a>
          <a href="#projetos" aria-label="Ir para a seção Projetos">Projetos</a>
          <a href="#contato" aria-label="Ir para a seção Contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
