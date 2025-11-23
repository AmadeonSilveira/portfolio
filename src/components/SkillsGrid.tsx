import Image from 'next/image';
import logo from '../assets/logo.png';
import skills from '@/data/skills.json';

export default function SkillsGrid() {
    return (
      <div className="skills-grid">
        {skills.map((skill) => {
          // Verificar se o ícone existe, caso contrário usar placeholder
          // Se skill.icon começar com /, é path absoluto do public, senão usa logo importado
          const iconSrc = skill.icon 
            ? (skill.icon.startsWith('/') ? skill.icon : logo)
            : logo;
          
          return (
            <div key={skill.id} className="skill-card">
              <Image 
                src={iconSrc} 
                alt={`Logo representativo da tecnologia ${skill.name.pt}`} 
                className="skill-icon-placeholder"
                width={60}
                height={60}
                loading="lazy"
                unoptimized={false}
              />
              <div className="skill-body">
                <h3 className="skill-title">{skill.name.pt}</h3>
                <p className="skill-subtitle">{skill.description.pt}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }  