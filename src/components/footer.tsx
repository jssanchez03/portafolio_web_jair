import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import RotatingText from './RotatingText';

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jssanchez03',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jair-s%C3%A1nchez/',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'jairssan03@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer 
      className="py-12 border-t" 
      style={{ 
        background: 'var(--bg)', 
        color: 'var(--fg)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold min-h-[3rem] flex items-center">
              <RotatingText
                texts={[
                  'Jair Sánchez',
                  t('footer.roles.fullstack', 'Full Stack Developer'),
                  t('footer.roles.frontend', 'Frontend Specialist'), 
                  t('footer.roles.backend', 'Backend Engineer'),
                  t('footer.roles.uiux', 'UI/UX Designer'),
                  t('footer.roles.mobile', 'Mobile Developer')
                ]}
                mainClassName="overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.015}
                splitLevelClassName="overflow-hidden"
                elementLevelClassName="inline-block"
                transition={{ type: "spring", damping: 35, stiffness: 300 }}
                rotationInterval={4500}
                splitBy="characters"
                style={{ 
                  color: '#818cf8',
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}
              />
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: 'var(--fg)' }}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'projects', 'skills', 'certificates', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="transition-all duration-300 capitalize hover:translate-x-1 inline-block hover:scale-105"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.color = '#615fff';
                      target.style.textShadow = '0 0 8px #615fff';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.color = 'var(--muted)';
                      target.style.textShadow = 'none';
                    }}
                  >
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold" style={{ color: 'var(--fg)' }}>
              {t('footer.connect')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300  hover:scale-110 hover:shadow-lg"
                    style={{ background: 'var(--card-bg)', color: 'var(--fg)' }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = '#615fff';
                      target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLAnchorElement;
                      target.style.background = 'var(--card-bg)';
                      target.style.color = 'var(--fg)';
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            {new Date().getFullYear()} Jair. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-1 text-sm mt-4 md:mt-0" style={{ color: 'var(--muted)' }}>
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500" /> Jair
          </div>
        </div>
      </div>
    </footer>
  );
};