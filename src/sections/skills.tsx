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
      title: "Frontend Development",
      icon: Code,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "TailwindCSS", level: 88 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 82 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 82 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 78 },
        { name: "Webpack", level: 75 },
        { name: "Vite", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('skills.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                  className={`p-6 rounded-xl ${category.bgColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${category.color} bg-white dark:bg-gray-700 shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
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
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.title === 'Frontend Development' 
                                ? 'from-blue-500 to-blue-600' 
                                : category.title === 'Backend Development'
                                ? 'from-green-500 to-green-600'
                                : category.title === 'Database & Cloud'
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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Other Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Next.js', 'Vue.js', 'Svelte', 'Redux', 'Zustand', 
                'Jest', 'Cypress', 'Storybook', 'Sass', 'Less',
                'Material-UI', 'Chakra UI', 'Ant Design', 'Bootstrap'
              ].map((tech, index) => (
                <span
                  key={tech}
                  data-aos="zoom-in"
                  data-aos-delay={350 + index * 25}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200 border border-gray-200 dark:border-gray-600"
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