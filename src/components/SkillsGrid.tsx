import logo from '../assets/logo.png';
import skills from '@/data/skills.json';

export default function SkillsGrid() {
    return (
      <div className="skills-grid">
        {skills.map((skill) => {
          // Verificar se o ícone existe, caso contrário usar placeholder
          const iconSrc = skill.icon || logo.src;
          
          return (
            <div key={skill.id} className="skill-card">
              <img 
                src={iconSrc} 
                alt={`Logo representativo da tecnologia ${skill.name.pt}`} 
                className="skill-icon-placeholder"
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