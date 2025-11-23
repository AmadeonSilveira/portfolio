'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const lastScrollDirection = useRef<'up' | 'down' | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const isScrolling = useRef(false);

  // Sincronizar estado React com o tema já aplicado pelo script inline (apenas no client após mount)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
    if (currentTheme === 'light' || currentTheme === 'dark') {
      setTheme(currentTheme);
    } else {
      // Fallback: ler do localStorage ou usar prefers-color-scheme
      const stored = localStorage.getItem('theme');
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initialTheme = (stored === 'light' || stored === 'dark') ? stored : (prefersLight ? 'light' : 'dark');
      setTheme(initialTheme as 'light' | 'dark');
    }
  }, []);

  // Aplicar tema quando mudar (apenas no client após mount)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Função para alternar tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const scrollingDown = currentScrollY > lastScrollY.current;
      
      // Fechar menu ao rolar a tela
      setIsMenuOpen((prev) => prev ? false : prev);
      
      setIsScrolled(currentScrollY > 50);
      
      // Se estiver no topo, sempre mostrar
      if (currentScrollY < 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      
      // Durante o scroll, sempre mostrar
      isScrolling.current = true;
      setIsVisible(true);
      
      // Limpar timeouts anteriores
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = null;
      }
      
      // Após parar de scrollar (delay de 800ms)
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        // Se estava scrollando para cima, manter visível
        // Se estava scrollando para baixo e não está com hover, esconder
        if (scrollingDown && !isHovered) {
          setIsVisible(false);
        }
        // Se estava scrollando para cima, manter visível (já está true)
      }, 800);
      
      // Salvar direção do último scroll
      if (scrollingUp) {
        lastScrollDirection.current = 'up';
      } else if (scrollingDown) {
        lastScrollDirection.current = 'down';
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    // Inicializar posição
    lastScrollY.current = window.scrollY;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleMouseEnter = () => {
    // Limpar qualquer timeout pendente de esconder
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const currentScrollY = window.scrollY;
    
    // Limpar timeout anterior se existir
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    
    // Adicionar delay antes de esconder (500ms)
    hoverTimeout.current = setTimeout(() => {
      // Esconder se:
      // - Não estiver no topo
      // - Não estiver scrollando ativamente
      // - Última direção do scroll não foi para cima (ou não há direção registrada)
      if (currentScrollY > 10 && !isScrolling.current && lastScrollDirection.current !== 'up') {
        setIsVisible(false);
      }
      hoverTimeout.current = null;
    }, 500);
  };

  return (
    <>
      {/* Área de detecção invisível no topo para mostrar navbar ao passar o mouse */}
      <div
        className={`navbar-hover-zone ${isScrolled ? 'navbar-hover-zone-scrolled' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      />
      <nav 
        ref={navRef}
        className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
        role="navigation"
        aria-label="Navegação principal"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <div className="navbar-container">
        <div 
          className="navbar-logo" 
          onClick={() => scrollToSection('inicio')}
          onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('inicio'))}
          role="button"
          tabIndex={0}
          aria-label="Ir para o início"
        >
          <div className="navbar-logo-name">Karin Andrade Silveira</div>
          <div className="navbar-logo-caption">Desenvolvedora Front-end & mobile</div>
        </div>

        <div 
          id="navbar-menu"
          className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}
          ref={menuRef}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('inicio')}
            role="menuitem"
            aria-label="Ir para a seção Início"
          >
            Início
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('sobre')}
            role="menuitem"
            aria-label="Ir para a seção Sobre"
          >
            Sobre
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('habilidades')}
            role="menuitem"
            aria-label="Ir para a seção Habilidades"
          >
            Habilidades
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('projetos')}
            role="menuitem"
            aria-label="Ir para a seção Projetos"
          >
            Projetos
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('contato')}
            role="menuitem"
            aria-label="Ir para a seção Contato"
          >
            Contato
          </button>

          <div className="navbar-icons navbar-icons-mobile">
            <button 
              className="navbar-icon-btn" 
              onClick={toggleTheme}
              onKeyDown={(e) => handleKeyDown(e, toggleTheme)}
              aria-label="Alternar tema"
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              type="button"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="navbar-icons navbar-icons-desktop">
          <button 
            className="navbar-icon-btn" 
            onClick={toggleTheme}
            onKeyDown={(e) => handleKeyDown(e, toggleTheme)}
            aria-label="Alternar tema"
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            type="button"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        <button 
          ref={toggleRef}
          className={`navbar-toggle ${isMenuOpen ? 'navbar-toggle-open' : ''}`}
          onClick={handleToggleMenu}
          onKeyDown={(e) => handleKeyDown(e, handleToggleMenu)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    </>
  );
}

