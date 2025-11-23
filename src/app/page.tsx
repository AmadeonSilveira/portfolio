'use client';

import Image from 'next/image';
import Hero from '../components/Hero';
import SkillsGrid from '../components/SkillsGrid';
import ProjectCard from '../components/ProjectCard';
import ProjectEditorialCard from '../components/ProjectEditorialCard';
import ParallaxScroll from '../components/ParallaxScroll';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import projects from '@/data/projects.json';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="page-root" aria-label="Conteúdo principal">
        <ParallaxScroll />
        <Hero />

      <section id="sobre" className="section about-section" role="region" aria-labelledby="sobre-title">
        <div className="container about-container">
          <div className="about-content">
            <h2 id="sobre-title" className="about-title">Sobre mim</h2>
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
            <Image 
              src={logo} 
              alt="Karin Andrade Silveira - Foto principal do portfólio" 
              className="main-photo"
              width={280}
              height={280}
              priority
              unoptimized={false}
            />
            <Image 
              src={logo} 
              alt="Karin Andrade Silveira - Foto decorativa" 
              className="floating-photo floating-photo-a"
              aria-hidden="true"
              width={90}
              height={90}
              loading="lazy"
              unoptimized={false}
            />
            <Image 
              src={logo} 
              alt="Karin Andrade Silveira - Foto decorativa" 
              className="floating-photo floating-photo-b"
              aria-hidden="true"
              width={110}
              height={110}
              loading="lazy"
              unoptimized={false}
            />
            <Image 
              src={logo} 
              alt="Karin Andrade Silveira - Foto decorativa" 
              className="floating-photo floating-photo-c"
              aria-hidden="true"
              width={95}
              height={95}
              loading="lazy"
              unoptimized={false}
            />
            <Image 
              src={logo} 
              alt="Karin Andrade Silveira - Foto decorativa" 
              className="floating-photo floating-photo-d"
              aria-hidden="true"
              width={115}
              height={100}
              loading="lazy"
              unoptimized={false}
            />
          </div>
        </div>
      </section>

      <section id="habilidades" className="section" role="region" aria-labelledby="habilidades-title">
        <div className="container">
          <h2 id="habilidades-title" className="section-title">Habilidades</h2>
          <SkillsGrid />
        </div>
      </section>

      <section id="projetos" className="section" role="region" aria-labelledby="projetos-title">
        <div className="container">
          <h2 id="projetos-title" className="section-title">Projetos</h2>
          <div className="projects">
            {projects
              .filter((project) => project.id === 'nikeon' || project.id === 'amadeon-portfolio')
              .map((project) => {
                // Usar logo.src como fallback se a imagem não existir
                const imageSrc = project.image || logo.src;
                
                return (
                  <ProjectEditorialCard
                    key={project.id}
                    title={project.title.pt}
                    description={project.description.pt}
                    image={imageSrc}
                    repo={project.repo}
                    demo={project.demo}
                    tech={project.tech}
                    orientation={project.orientation as 'horizontal' | 'square' | 'vertical'}
                    slug={project.id}
                  />
                );
              })}
          </div>
        </div>
      </section>

      <footer id="contato" className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-links">
            <a 
              href="mailto:kasilveira32@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="Enviar e-mail para kasilveira32@gmail.com"
            >
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              kasilveira32@gmail.com
            </a>
            <span className="footer-separator" aria-hidden="true">•</span>
            <a 
              href="https://linkedin.com/in/karin-silveira" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="Abrir perfil do LinkedIn de Karin Silveira em nova aba"
            >
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              LinkedIn
            </a>
            <span className="footer-separator" aria-hidden="true">•</span>
            <a 
              href="https://github.com/AmadeonSilveira" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="Abrir perfil do GitHub de AmadeonSilveira em nova aba"
            >
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              GitHub
            </a>
            <span className="footer-separator" aria-hidden="true">•</span>
            <a 
              href="https://instagram.com/silveiiras" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="Abrir perfil do Instagram de silveiiras em nova aba"
            >
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Instagram
            </a>
            <span className="footer-separator" aria-hidden="true">•</span>
            <a 
              href="/Karin_Andrade_Silveira_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="Baixar currículo de Karin Andrade Silveira em PDF"
              download
            >
              <svg className="footer-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
    </>
  );
}