import { useTranslation } from 'react-i18next';
import { Code, Users, Award, Coffee } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Code,
      number: "3+",
      label: t('about.experience'),
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      number: "15+",
      label: t('about.projects'),
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Award,
      number: "10+",
      label: t('about.technologies'),
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Coffee,
      number: "∞",
      label: "Cups of coffee",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div data-aos="fade-right" data-aos-delay="100" className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              {/* Profile Image Placeholder */}
              <div
                data-aos="zoom-in"
                data-aos-delay="150"
                className="relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {/* Replace this div with your actual image */}
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div data-aos="fade-left" data-aos-delay="100" className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      data-aos="flip-up"
                      data-aos-delay={150 + index * 50}
                      className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                    >
                      <IconComponent className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {stat.number}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Skills Preview */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS', 'MongoDB'].map((tech, index) => (
                    <span
                      key={tech}
                      data-aos="fade-in"
                      data-aos-delay={250 + index * 25}
                      className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};