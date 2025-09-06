import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import 'aos/dist/aos.css';

export const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jair', // Replace with your GitHub
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jair', // Replace with your LinkedIn
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:jair@example.com', // Replace with your email
      icon: Mail
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div data-aos="fade-right" data-aos-delay="100" className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jair.dev
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'projects', 'skills', 'certificates', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 capitalize hover:translate-x-1 inline-block"
                  >
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div data-aos="fade-left" data-aos-delay="300" className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('footer.connect')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-delay={400 + index * 100}
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="500"
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            {new Date().getFullYear()} Jair. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm mt-4 md:mt-0">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500" /> Jair
          </div>
        </div>
      </div>
    </footer>
  );
};