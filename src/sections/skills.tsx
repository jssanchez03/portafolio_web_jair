import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { useState, useEffect } from 'react';

export const Skills = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [imageKey, setImageKey] = useState(0);

  // Force image reload when theme changes
  useEffect(() => {
    setImageKey(prev => prev + 1);
  }, [isDark]);

  // Helper: icon path with theme variant
  const getIconPath = (iconName: string, hasThemeVariants: boolean = false) => {
    // Lista de iconos que SÍ tienen variantes light/dark
    const themedIcons = [
      'React', 'Express.js', 'GitHub', 'Php', 'Flask', 'ui'
    ];

    const hasVariant = hasThemeVariants || themedIcons.includes(iconName);
    
    if (hasVariant) {
      return `/icons/${iconName}_${isDark ? 'dark' : 'light'}.svg?v=${imageKey}`;
    }
    return `/icons/${iconName}.svg`;
  };

  // Fallbacks para íconos que pueden no existir
  const fallbackIconByName: Record<string, string> = {
    // Flask ya no necesita fallback si existe Flask_light/dark
    JWT: getIconPath('javascript'),
  };

  // Helper to pad to 3x3 for equal card heights
  const padToNine = <T,>(items: T[]): (T | null)[] => {
    const max = 9;
    const out = [...items];
    while (out.length < max) out.push(null as unknown as T);
    return out.slice(0, max);
  };

  // Move skillCategories inside component to recalculate icons on theme change
  const skillCategories = [
    {
      title: t('skills.frontend'),
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: getIconPath('React') },
        { name: 'TypeScript', icon: getIconPath('typescript') },
        { name: 'JavaScript', icon: getIconPath('javascript') },
        { name: 'HTML5', icon: getIconPath('html5') },
        { name: 'CSS3', icon: getIconPath('css_old') },
        { name: 'TailwindCSS', icon: getIconPath('tailwindcss') },
        { name: 'Angular', icon: getIconPath('angular') },
        { name: 'Bootstrap', icon: getIconPath('bootstrap') },
        { name: 'UI (shadcn)', icon: getIconPath('ui') },
      ],
    },
    {
      title: t('skills.backend'),
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Express.js', icon: getIconPath('Express.js') },
        { name: 'Laravel', icon: getIconPath('laravel') },
        { name: 'Node.js', icon: getIconPath('nodejs') },
        { name: 'PHP', icon: getIconPath('Php') },
        { name: 'Python', icon: getIconPath('python') },
        { name: 'Spring', icon: getIconPath('spring') },
        { name: 'Java', icon: getIconPath('java') },
        { name: 'Flask', icon: getIconPath('Flask') },
      ],
    },
    {
      title: t('skills.database'),
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', icon: getIconPath('mongodb') },
        { name: 'MySQL', icon: getIconPath('mysql') },
        { name: 'PostgreSQL', icon: getIconPath('postgresql') },
        { name: 'SQL Server', icon: getIconPath('sql-server') },
      ],
    },
    {
      title: t('skills.mobile'),
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Android', icon: getIconPath('android-icon') },
        { name: 'Flutter', icon: getIconPath('flutter') },
        { name: 'Dart', icon: getIconPath('dart') },
      ],
    },
    {
      title: t('skills.tools'),
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Docker', icon: getIconPath('docker') },
        { name: 'Git', icon: getIconPath('git') },
        { name: 'GitHub', icon: getIconPath('GitHub') },
        { name: 'Postman', icon: getIconPath('postman') },
        { name: 'VS Code', icon: getIconPath('vscode') },
        { name: 'Figma', icon: getIconPath('figma') },
      ],
    },
    {
      title: t('skills.otherTech'),
      color: 'from-gray-500 to-gray-600',
      skills: [
        { name: 'Cloudinary', icon: getIconPath('cloudinary') },
        { name: 'JWT', icon: getIconPath('jwt') },
        { name: 'Vitejs', icon: getIconPath('vitejs') },
        { name: 'NPM', icon: getIconPath('npm') },
      ],
    },
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

          {/* Skills Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                data-aos="fade-up"
                data-aos-delay={100 + categoryIndex * 50}
                className="group relative"
              >
                {/* macOS Category Card */}
                <div
                  className="relative p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                  style={{
                    background: isDark 
                      ? 'rgba(26, 26, 26, 0.9)' 
                      : 'rgba(255, 255, 255, 0.95)',
                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    boxShadow: isDark
                      ? '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 8px 16px -4px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {/* macOS Window Controls */}
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full opacity-90" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-90" />
                    <div className="w-3 h-3 bg-green-500 rounded-full opacity-90" />
                  </div>

                  {/* Category Title */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`h-1 w-8 bg-gradient-to-r ${category.color} rounded-full`} />
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--fg)' }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies Grid 3x3 with square tiles */}
                  <div className="grid grid-cols-3 gap-4">
                    {padToNine(category.skills).map((skill, skillIndex) => (
                      <div
                        key={skill ? skill.name : `placeholder-${skillIndex}`}
                        data-aos="zoom-in"
                        data-aos-delay={150 + categoryIndex * 50 + skillIndex * 25}
                        className={`rounded-lg p-3 transition-all duration-200 hover:scale-105 ${skill ? '' : 'invisible'}`}
                        style={{
                          background: isDark 
                            ? 'rgba(42, 42, 42, 0.8)' 
                            : 'rgba(248, 250, 252, 0.9)',
                          border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                          boxShadow: isDark
                            ? '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                            : '0 4px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                        }}
                      >
                        <div className="w-full aspect-square flex flex-col items-center justify-center space-y-2">
                          {skill && (
                            <>
                              <div 
                                className="w-10 h-10 flex items-center justify-center rounded-md"
                                style={{
                                  background: isDark ? 'transparent' : 'rgba(255, 255, 255, 0.7)',
                                  padding: '2px'
                                }}
                              >
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  key={`${skill.name}-${isDark}-${imageKey}`}
                                  className="w-8 h-8 object-contain"
                                  onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement;
                                    const fallback = fallbackIconByName[skill.name as keyof typeof fallbackIconByName];
                                    if (fallback && target.src !== window.location.origin + fallback) {
                                      target.src = fallback;
                                    } else {
                                      target.style.display = 'none';
                                    }
                                  }}
                                />
                              </div>
                              <p className="text-xs font-medium text-center leading-tight" style={{ color: 'var(--fg)' }} title={skill.name}>
                                {skill.name}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Terminal Cursor Effect */}
                  <div className="absolute bottom-3 right-3">
                    <div 
                      className="w-2 h-4 animate-pulse rounded-sm" 
                      style={{ 
                        background: isDark ? '#00ff41' : '#22c55e',
                        boxShadow: isDark ? '0 0 8px #00ff41' : '0 0 4px #22c55e'
                      }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};