import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      title: "Desarrollador Full Stack",
      company: "Instituto Superior Tecnológico Los Andes (ISTLA)",
      location: "Santo Domingo, Ecuador",
      period: "Marzo 2025 – Agosto 2025",
      description: "Desarrollé un sistema web de evaluación docente en producción, con autenticación, formularios dinámicos y paneles por roles. Generé reportes en tiempo real (Node.js, React, MySQL) que mejoraron la toma de decisiones académicas.",
      technologies: ["Node.js", "React", "MySQL", "TypeScript", "HTML", "TailwindCSS"],
      type: "work"
    },
    {
      id: 2,
      title: "Desarrollador de Software (Prácticas)",
      company: "Cuerpo de Bomberos de Santo Domingo (GAD Municipal)",
      location: "Santo Domingo, Ecuador",
      period: "Septiembre 2024 – Noviembre 2024",
      description: "Migré un sistema de Python a PHP, unificando módulos en una sola aplicación web. Implementé el módulo de gestión de incidentes, agilizando registro y consulta de emergencias.",
      technologies: ["PHP", "Python", "PostgreSQL", "JavaScript", "CSS", "jQuery", "Bootstrap"],
      type: "internship"
    },
    {
      id: 3,
      title: "Desarrollador de Aplicaciones Móviles (Prácticas)",
      company: "iDrix Technology",
      location: "Santo Domingo, Ecuador",
      period: "Abril 2024 – Julio 2024",
      description: "Colaboré en el desarrollo de apps móviles con Flutter, implementando registro y lectura NFC. Aporté en diseño UI, conexión backend y pruebas funcionales, mejorando la experiencia de usuario.",
      technologies: ["Flutter", "Dart", "NFC", "UI/UX Design", "Backend Integration"],
      type: "internship"
    },
    {
      id: 4,
      title: "Diseñador UX/UI (Formación)",
      company: "Universidad de las Fuerzas Armadas ESPE",
      location: "Santo Domingo, Ecuador",
      period: "Septiembre 2023 – Noviembre 2023",
      description: "Diseñé interfaces y prototipos para una app de gestión de emergencias comunitarias. Elaboré manuales de usuario y logo, facilitando la adopción de la solución por la comunidad.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Manuals"],
      type: "training"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-green-500';
      case 'internship':
        return 'bg-blue-500';
      case 'training':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="experience" className="py-20" style={{ background: 'var(--section-alt-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 mr-3" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--fg)' }}>
                {t('experience.title')}
              </h2>
            </div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('experience.subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={100 + index * 100}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-4 h-4 rounded-full ${getTypeColor(exp.type)} border-4 border-white shadow-lg`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <div
                      className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--fg)' }}>
                          {exp.title}
                        </h3>
                        <div className="flex items-center mb-2">
                          <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
                          <span className="font-semibold text-blue-500">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--muted)' }}>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              background: 'var(--section-bg)', 
                              color: 'var(--fg)',
                              border: '1px solid var(--border)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
