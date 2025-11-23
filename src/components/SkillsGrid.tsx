import logo from '../assets/logo.png';

export default function SkillsGrid() {
    const items = [
      { name: 'React', subtitle: 'Componentes e hooks' },
      { name: 'React Native', subtitle: 'Desenvolvimento mobile' },
      { name: 'TypeScript', subtitle: 'Tipagem estática' },
      { name: 'Flutter', subtitle: 'Apps multiplataforma' },
      { name: 'HTML', subtitle: 'Estrutura semântica' },
      { name: 'CSS', subtitle: 'Estilização moderna' },
      { name: 'APIs & REST', subtitle: 'Integração de dados' },
      { name: 'PHP', subtitle: 'Backend e servidor' },
      { name: 'WordPress', subtitle: 'CMS e temas' },
    ];
  
    return (
      <div className="skills-grid">
        {items.map((it) => (
          <div key={it.name} className="skill-card">
            <img 
              src={logo.src} 
              alt={`${it.name} logo`} 
              className="skill-icon-placeholder"
            />
            <div className="skill-body">
              <h3 className="skill-title">{it.name}</h3>
              <p className="skill-subtitle">{it.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }  