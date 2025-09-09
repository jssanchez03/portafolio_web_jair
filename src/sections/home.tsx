import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import LightRays from '../components/LightRays';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--hero-gradient)', color: 'var(--fg)' }}
    >
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-30"
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center flex flex-col items-center justify-center">
          {/* Main Content */}
          <div data-aos="fade-up" data-aos-delay="100" className="mb-3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-[var(--fg)] leading-tight">
              <span data-aos="fade-right" data-aos-delay="150">
                {t('home.greeting')}
              </span>
              <br />
              <span 
                data-aos="fade-left" 
                data-aos-delay="200"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
              >
                {t('home.name')}
              </span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="250" className="mb-6">
            <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl mx-auto leading-relaxed font-light text-center" style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
              {t('home.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-base"
            >
              {t('home.viewWork')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-semibold rounded-full transition-all duration-300 cursor-pointer hover:scale-105 text-base"
            >
              {t('home.getInTouch')}
            </Link>
          </div>

          {/* Social Links */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="350"
            className="flex justify-center space-x-5 mb-8"
          >
            <a
              href="https://github.com/jssanchez03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-indigo-500 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jair-s%C3%A1nchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-indigo-500 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jairssan03@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-indigo-500 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
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
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};