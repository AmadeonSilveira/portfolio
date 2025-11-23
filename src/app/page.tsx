'use client';

import Hero from '../components/Hero';
import SkillsGrid from '../components/SkillsGrid';
import ProjectCard from '../components/ProjectCard';
import ParallaxScroll from '../components/ParallaxScroll';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

export default function Home() {
  return (
    <main className="page-root">
      <Navbar />
      <ParallaxScroll />
      <Hero />

      <section id="sobre" className="section about-section">
        <div className="container about-container">
          <div className="about-content">
            <h2 className="about-title">Sobre mim</h2>
            <div className="about-text">
              <p>
                Sou desenvolvedora front-end e mobile, apaixonada por criar interfaces funcionais, fluídas e cheias de propósito.
              </p>
              <p>
                Entrei na tecnologia no curso técnico, segui na faculdade e continuo evoluindo desde então — movida pela curiosidade e pela sensação única de ver uma ideia ganhar forma.
              </p>
              <p>
                Fora do código, amo board games, danço no CTG e sou apaixonada por viagens. Meu objetivo é crescer na carreira e, um dia, liderar e inspirar outras pessoas.
              </p>
            </div>
          </div>
          <div className="about-photo-stack">
            <img 
              src={logo.src} 
              alt="Foto principal" 
              className="main-photo"
            />
            <img 
              src={logo.src} 
              alt="Foto flutuante A" 
              className="floating-photo floating-photo-a"
            />
            <img 
              src={logo.src} 
              alt="Foto flutuante B" 
              className="floating-photo floating-photo-b"
            />
            <img 
              src={logo.src} 
              alt="Foto flutuante C" 
              className="floating-photo floating-photo-c"
            />
            <img 
              src={logo.src} 
              alt="Foto flutuante D" 
              className="floating-photo floating-photo-d"
            />
          </div>
        </div>
      </section>

      <section id="habilidades" className="section">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <SkillsGrid />
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="container">
          <h2 className="section-title">Projetos</h2>
          <div className="projects">
            {/* Card 1 - Horizontal */}
            <article className="editorial-card editorial-card-horizontal">
              <img 
                src={logo.src} 
                alt="Nikeon — Gerenciamento & Ranking de Jogos" 
                className="card-image"
              />
              <div className="card-content">
                <div>
                  <h3 className="card-title">Nikeon — Gerenciamento & Ranking de Jogos</h3>
                  <p className="card-description">
                    App mobile para registrar partidas, gerar estatísticas e rankings. Visual moderno e intuitivo.
                  </p>
                  <div className="card-tech">
                    <span className="tech-badge">Flutter</span>
                    <span className="tech-badge">Supabase</span>
                    <span className="tech-badge">Auth</span>
                    <span className="tech-badge">Ranking Automático</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="#" className="card-btn card-btn-primary">Ver projeto</a>
                  <a 
                    href="https://github.com/AmadeonSilveira/nikeon" 
                    target="_blank" 
                    rel="noreferrer"
                    className="card-btn card-btn-secondary"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2 - Quadrado */}
            <article className="editorial-card editorial-card-square">
              <img 
                src={logo.src} 
                alt="Portfolio Amadeon" 
                className="card-image"
              />
              <div className="card-content">
                <div>
                  <h3 className="card-title">Portfolio Amadeon</h3>
                  <p className="card-description">
                    Desenvolvimento do meu próprio portfólio com efeitos visuais premium.
                  </p>
                  <div className="card-tech">
                    <span className="tech-badge">React</span>
                    <span className="tech-badge">Next.js</span>
                    <span className="tech-badge">CSS</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="#" className="card-btn card-btn-primary">Ver projeto</a>
                  <a 
                    href="https://github.com/AmadeonSilveira/portfolio" 
                    target="_blank" 
                    rel="noreferrer"
                    className="card-btn card-btn-secondary"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3 - Vertical Estreito */}
            <article className="editorial-card editorial-card-vertical">
              <img 
                src={logo.src} 
                alt="Gerenciador de Rotinas" 
                className="card-image"
              />
              <div className="card-content">
                <div>
                  <h3 className="card-title">Gerenciador de Rotinas</h3>
                  <p className="card-description">
                    App simples para registrar tarefas e acompanhar hábitos.
                  </p>
                  <div className="card-tech">
                    <span className="tech-badge">React Native</span>
                    <span className="tech-badge">AsyncStorage</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="#" className="card-btn card-btn-primary">Ver projeto</a>
                  <a 
                    href="https://github.com/AmadeonSilveira/routine-manager" 
                    target="_blank" 
                    rel="noreferrer"
                    className="card-btn card-btn-secondary"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer id="contato" className="site-footer">
        <div className="container">
          <div className="footer-links">
            <a href="mailto:kasilveira32@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              kasilveira32@gmail.com
            </a>
            <span className="footer-separator">•</span>
            <a href="https://linkedin.com/in/karin-silveira" target="_blank" rel="noopener noreferrer" className="footer-link">
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              LinkedIn
            </a>
            <span className="footer-separator">•</span>
            <a href="https://github.com/AmadeonSilveira" target="_blank" rel="noopener noreferrer" className="footer-link">
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              GitHub
            </a>
            <span className="footer-separator">•</span>
            <a href="https://instagram.com/silveiiras" target="_blank" rel="noopener noreferrer" className="footer-link">
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Instagram
            </a>
            <span className="footer-separator">•</span>
            <a href="/Karin_Andrade_Silveira_CV.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Baixar currículo
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}