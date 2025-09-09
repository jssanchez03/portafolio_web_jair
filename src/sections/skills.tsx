import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Database, 
  Server, 
  GitBranch,
} from 'lucide-react';

export const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "TailwindCSS", level: 88 },
        { name: "Angular", level: 75 }
      ]
    },
    {
      title: t('skills.backend'),
      icon: Server,
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "Express.js", level: 85 },
        { name: "Laravel", level: 70 },
        { name: "Spring Boot", level: 70 }
      ]
    },
    {
      title: t('skills.database'),
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL Server", level: 75 }
      ]
    },
    {
      title: t('skills.tools'),
      icon: GitBranch,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20" style={{ background: 'var(--section-alt-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('skills.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('skills.subtitle')}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  data-aos="fade-up"
                  data-aos-delay={100 + categoryIndex * 50}
                  className="p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  style={{ background: 'var(--card-bg)' }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${category.color} shadow-md`} style={{ background: 'var(--section-bg)' }}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold" style={{ color: 'var(--fg)' }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay={150 + categoryIndex * 50 + skillIndex * 25}
                        className="skill-item"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
                            {skill.name}
                          </span>
                          <span className="text-sm" style={{ color: 'var(--muted)' }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full rounded-full h-2" style={{ background: 'var(--section-alt-bg)' }}>
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.title === t('skills.frontend') 
                                ? 'from-blue-500 to-blue-600' 
                                : category.title === t('skills.backend')
                                ? 'from-green-500 to-green-600'
                                : category.title === t('skills.database')
                                ? 'from-purple-500 to-purple-600'
                                : 'from-orange-500 to-orange-600'
                            }`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: 'fillBar 1.5s ease-out forwards'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--fg)' }}>
              {t('skills.otherTech')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Flask', 'Dart', 'NFC', 'UI/UX Design', 'Prototyping', 
                'User Manuals', 'Scrum/Jira', 'REST APIs', 'Backend Integration'
              ].map((tech, index) => (
                <span
                  key={tech}
                  data-aos="zoom-in"
                  data-aos-delay={350 + index * 25}
                  className="px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200"
                  style={{ background: 'var(--card-bg)', color: 'var(--fg)', border: '1px solid var(--border)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};