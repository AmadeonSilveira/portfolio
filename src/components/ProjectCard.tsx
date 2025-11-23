'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, img, repo } : { title: string, description: string, img: string, repo?: string }) {
  return (
    <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
      <img 
        src={img} 
        alt={`Captura de tela do projeto ${title} - ${description}`} 
        className="project-thumb" 
      />
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {repo && (
            <a 
              href={repo} 
              target="_blank" 
              rel="noreferrer" 
              className="btn small"
              aria-label={`Abrir repositório do projeto ${title} no GitHub em nova aba`}
            >
              Ver repositório
            </a>
          )}
          <a 
            href="#" 
            className="btn small ghost"
            aria-label={`Ver detalhes do projeto ${title}`}
          >
            Ver detalhes
          </a>
        </div>
      </div>
    </motion.article>
  );
}
