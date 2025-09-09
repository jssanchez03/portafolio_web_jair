import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--hero-gradient)', color: 'var(--fg)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div
            data-aos="zoom-in"
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              <div className="relative w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-4xl md:text-5xl border-4 border-white">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--fg)]">
              <span data-aos="fade-right" data-aos-delay="150">
                {t('home.greeting')}
              </span>
              <br />
              <span 
                data-aos="fade-left" 
                data-aos-delay="200"
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {t('home.name')}
              </span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
              {t('home.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {t('home.viewWork')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {t('home.getInTouch')}
            </Link>
          </div>

          {/* Social Links */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="350"
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/jssanchez03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-blue-600 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jair-s%C3%A1nchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-blue-600 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jairssan03@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-blue-600 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Download CV Button */}
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
              style={{ background: 'color-mix(in srgb, var(--bg) 90%, #e5e7eb)', color: 'var(--fg)' }}
            >
              <Download className="w-5 h-5" />
              {t('home.downloadCV')}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div 
            data-aos="bounce" 
            data-aos-delay="450"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="flex flex-col items-center transition-colors duration-300 cursor-pointer"
              style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}
            >
              <span className="text-sm mb-2">{t('home.scrollDown')}</span>
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};