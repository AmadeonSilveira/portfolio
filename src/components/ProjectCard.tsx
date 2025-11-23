'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, img, repo } : { title: string, description: string, img: string, repo?: string }) {
  return (
    <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
      <img src={img} alt={title} className="project-thumb" />
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {repo && <a href={repo} target="_blank" rel="noreferrer" className="btn small">Ver repositório</a>}
          <a href="#" className="btn small ghost">Ver detalhes</a>
        </div>
      </div>
    </motion.article>
  );
}
