import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

export const Skills = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  // Helper: icon path with theme variant
  const getIconPath = (iconName: string, hasThemeVariants: boolean = false) => {
    // Lista de iconos que SÍ tienen variantes light/dark
    const themedIcons = [
      'React', 'Express.js', 'GitHub', 'Php', 'Flask', 'ui'
    ];

    const hasVariant = hasThemeVariants || themedIcons.includes(iconName);
    
    if (hasVariant) {
      return `/src/assets/icons/${iconName}_${isDark ? 'dark' : 'light'}.svg`;
    }
    return `/src/assets/icons/${iconName}.svg`;
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

  const skillCategories = [
    {
      title: t('skills.frontend'),
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: getIconPath('React') }, // Usa automáticamente _light/_dark
        { name: 'TypeScript', icon: getIconPath('typescript') },
        { name: 'JavaScript', icon: getIconPath('javascript') },
        { name: 'HTML5', icon: getIconPath('html5') },
        { name: 'CSS3', icon: getIconPath('css_old') },
        { name: 'TailwindCSS', icon: getIconPath('tailwindcss') },
        { name: 'Angular', icon: getIconPath('angular') },
        { name: 'Bootstrap', icon: getIconPath('bootstrap') },
        { name: 'UI (shadcn)', icon: getIconPath('ui') }, // Añadido shadcn/ui
      ],
    },
    {
      title: t('skills.backend'),
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Express.js', icon: getIconPath('Express.js') }, // Usa _light/_dark
        { name: 'Laravel', icon: getIconPath('laravel') },
        { name: 'Node.js', icon: getIconPath('nodejs') },
        { name: 'PHP', icon: getIconPath('Php') }, // Usa _light/_dark
        { name: 'Python', icon: getIconPath('python') },
        { name: 'Spring', icon: getIconPath('spring') },
        { name: 'Java', icon: getIconPath('java') },
        { name: 'Flask', icon: getIconPath('Flask') }, // Usa _light/_dark
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
        { name: 'GitHub', icon: getIconPath('GitHub') }, // Usa automáticamente _light/_dark
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
                  className="relative p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: isDark ? '#1a1a1a' : '#ffffff',
                    border: `1px solid ${isDark ? '#333' : '#e5e7eb'}`,
                    boxShadow: isDark
                      ? '0 10px 25px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
                      : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* macOS Window Controls */}
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
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
                        className={`rounded-lg p-3 ${skill ? '' : 'invisible'}`}
                        style={{
                          background: isDark ? '#2a2a2a' : '#f8fafc',
                          border: `1px solid ${isDark ? '#404040' : '#e2e8f0'}`,
                        }}
                      >
                        <div className="w-full aspect-square flex flex-col items-center justify-center space-y-2">
                          {skill && (
                            <>
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-10 h-10 object-contain"
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
                    <div className="w-2 h-4 animate-pulse rounded-sm" />
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