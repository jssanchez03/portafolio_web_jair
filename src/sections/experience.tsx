import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      title: t('experience.experiences.exp1.title', 'Desarrollador Full Stack'),
      company: t('experience.experiences.exp1.company', 'Instituto Superior Tecnológico Los Andes (ISTLA)'),
      location: t('experience.experiences.exp1.location', 'Santo Domingo, Ecuador'),
      period: t('experience.experiences.exp1.period', 'Marzo 2025 – Agosto 2025'),
      description: t('experience.experiences.exp1.description', 'Desarrollé un sistema web de evaluación docente en producción, con autenticación, formularios dinámicos y paneles por roles. Generé reportes en tiempo real (Node.js, React, MySQL) que mejoraron la toma de decisiones académicas.'),
      technologies: ["Node.js", "React", "MySQL", "TypeScript", "HTML", "TailwindCSS"],
      type: "work"
    },
    {
      id: 2,
      title: t('experience.experiences.exp2.title', 'Desarrollador de Software (Prácticas)'),
      company: t('experience.experiences.exp2.company', 'Cuerpo de Bomberos de Santo Domingo (GAD Municipal)'),
      location: t('experience.experiences.exp2.location', 'Santo Domingo, Ecuador'),
      period: t('experience.experiences.exp2.period', 'Septiembre 2024 – Noviembre 2024'),
      description: t('experience.experiences.exp2.description', 'Migré un sistema de Python a PHP, unificando módulos en una sola aplicación web. Implementé el módulo de gestión de incidentes, agilizando registro y consulta de emergencias.'),
      technologies: ["PHP", "Python", "PostgreSQL", "JavaScript", "CSS", "jQuery", "Bootstrap"],
      type: "internship"
    },
    {
      id: 3,
      title: t('experience.experiences.exp3.title', 'Desarrollador de Aplicaciones Móviles (Prácticas)'),
      company: t('experience.experiences.exp3.company', 'iDrix Technology'),
      location: t('experience.experiences.exp3.location', 'Santo Domingo, Ecuador'),
      period: t('experience.experiences.exp3.period', 'Abril 2024 – Julio 2024'),
      description: t('experience.experiences.exp3.description', 'Colaboré en el desarrollo de apps móviles con Flutter, implementando registro y lectura NFC. Aporté en diseño UI, conexión backend y pruebas funcionales, mejorando la experiencia de usuario.'),
      technologies: ["Flutter", "Dart", "NFC", "UI/UX Design", "Backend Integration"],
      type: "internship"
    },
    {
      id: 4,
      title: t('experience.experiences.exp4.title', 'Diseñador UX/UI (Formación)'),
      company: t('experience.experiences.exp4.company', 'Universidad de las Fuerzas Armadas ESPE'),
      location: t('experience.experiences.exp4.location', 'Santo Domingo, Ecuador'),
      period: t('experience.experiences.exp4.period', 'Septiembre 2023 – Noviembre 2023'),
      description: t('experience.experiences.exp4.description', 'Diseñé interfaces y prototipos para una app de gestión de emergencias comunitarias. Elaboré manuales de usuario y logo, facilitando la adopción de la solución por la comunidad.'),
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
    <section id="experience" className="py-20 overflow-hidden" style={{ background: 'var(--section-alt-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('experience.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('experience.subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Responsive */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                  className="relative"
                >
                  {/* Timeline Dot - Responsive */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-8 md:top-1/2">
                    <div className={`w-4 h-4 rounded-full ${getTypeColor(exp.type)} border-4 border-white shadow-lg`}></div>
                  </div>

                  {/* Content Card - Responsive Layout */}
                  <div className={`w-full ${
                    index % 2 === 0 
                      ? 'md:w-5/12 md:pr-8' 
                      : 'md:w-5/12 md:ml-auto md:pl-8'
                  } pl-12 md:pl-0`}>
                    <div
                      className="p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-sm border"
                      style={{ 
                        background: 'var(--card-bg)', 
                        border: '1px solid var(--border)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transformOrigin: 'center center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                      }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--fg)' }}>
                          {exp.title}
                        </h3>
                        <div className="flex items-start mb-2">
                          <Briefcase className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="font-semibold text-blue-500 text-sm md:text-base leading-tight">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm" style={{ color: 'var(--muted)' }}>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                            <span className="break-words">{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                            <span className="break-words">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-4 leading-relaxed text-sm md:text-base" style={{ color: 'var(--muted)' }}>
                        {exp.description}
                      </p>

                      {/* Technologies - Responsive Grid */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 md:px-3 py-1 rounded-full text-xs font-medium break-all"
                            style={{ 
                              background: 'var(--section-bg)', 
                              color: 'var(--fg)',
                              border: '1px solid var(--border)',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: 'scale(1)',
                              maxWidth: '100%'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};