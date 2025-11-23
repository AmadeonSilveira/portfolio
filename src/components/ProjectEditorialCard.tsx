'use client';

import Image from 'next/image';

interface ProjectEditorialCardProps {
  title: string;
  description: string;
  image: string;
  repo?: string | null;
  demo?: string | null;
  tech: string[];
  orientation: 'horizontal' | 'square' | 'vertical';
}

export default function ProjectEditorialCard({
  title,
  description,
  image,
  repo,
  demo,
  tech,
  orientation,
}: ProjectEditorialCardProps) {
  const cardClass = `editorial-card editorial-card-${orientation}`;
  const demoHref = demo || '#';
  const repoHref = repo || '#';

  return (
    <article className={cardClass}>
      <Image 
        src={image} 
        alt={`Captura de tela do projeto ${title} - ${description}`} 
        className="card-image"
        width={600}
        height={200}
        loading="lazy"
      />
      <div className="card-content">
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-tech">
            {tech.map((techItem, index) => (
              <span key={index} className="tech-badge">{techItem}</span>
            ))}
          </div>
        </div>
        <div className="card-actions">
          <a 
            href={demoHref} 
            className="card-btn card-btn-primary"
            aria-label={`Ver detalhes do projeto ${title}`}
          >
            Ver projeto
          </a>
          {repo && (
            <a 
              href={repoHref} 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-btn card-btn-secondary"
              aria-label={`Abrir repositório do ${title} no GitHub em nova aba`}
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

