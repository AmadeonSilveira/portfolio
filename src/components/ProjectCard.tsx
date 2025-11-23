'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  repo?: string | null;
  demo?: string | null;
}

export default function ProjectCard({ 
  title, 
  description, 
  img, 
  repo,
  demo,
}: ProjectCardProps) {
  return (
    <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
      <Image 
        src={img} 
        alt={`Captura de tela do projeto ${title} - ${description}`} 
        className="project-thumb" 
        width={600}
        height={400}
        loading="lazy"
      />
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {repo && (
            <a 
              href={repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn small"
              aria-label={`Abrir repositório do projeto ${title} no GitHub em nova aba`}
            >
              Ver repositório
            </a>
          )}
          <a 
            href={demo || '#'} 
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
