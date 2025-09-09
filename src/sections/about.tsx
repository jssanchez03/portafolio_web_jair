import { useTranslation } from 'react-i18next';
import { Code, Users, Award, Coffee } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Code,
      number: "3+",
      label: t('about.experience'),
      color: "text-blue-600"
    },
    {
      icon: Users,
      number: "10+",
      label: t('about.projects'),
      color: "text-green-600"
    },
    {
      icon: Award,
      number: "15+",
      label: t('about.technologies'),
      color: "text-purple-600"
    },
    {
      icon: Coffee,
      number: "∞",
      label: "Cups of coffee",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20" style={{ background: 'var(--section-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('about.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div data-aos="fade-right" data-aos-delay="100" className="space-y-6">
              <div className="prose prose-lg">
                <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {t('about.description')}
                </p>
              </div>

              {/* Profile Image Placeholder */}
              <div
                data-aos="zoom-in"
                data-aos-delay="150"
                className="relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full rounded-2xl flex items-center justify-center" style={{ background: 'var(--card-bg)' }}>
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
                      className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                      style={{ background: 'var(--section-alt-bg)' }}
                    >
                      <IconComponent className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-3xl font-bold mb-2" style={{ color: 'var(--fg)' }}>
                        {stat.number}
                      </div>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
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
                className="p-6 rounded-xl"
                style={{ background: 'var(--section-alt-bg)' }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--fg)' }}>
                  {t('about.coretech')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Flutter', 'PHP', 'MySQL', 'Python', 'Java'].map((tech, index) => (
                    <span
                      key={tech}
                      data-aos="fade-in"
                      data-aos-delay={250 + index * 25}
                      className="px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-110 transition-transform duration-200"
                      style={{ background: 'var(--card-bg)', color: 'var(--fg)', border: '1px solid var(--border)' }}
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