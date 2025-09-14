import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import LightRays from '../components/LightRays';
import TextType from '../components/TextType';
import SplitText from '../components/SplitText';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen h-screen md:h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        background: 'var(--hero-gradient)', 
        color: 'var(--fg)',
        minHeight: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))'
      }}
    >
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          useThemeColors={true}
          raysSpeed={1.2}
          lightSpread={1.0}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.03}
          saturation={0.7}
          fadeDistance={0.8}
          className="opacity-40 dark:opacity-25"
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
          <div className="mb-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-1 text-[var(--fg)] leading-tight">
              <SplitText
                text={t('home.greeting')}
                tag="span"
                className="text-xl md:text-3xl lg:text-4xl text-[var(--fg)] block"
                delay={80}
                duration={0.5}
                ease="power2.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.3}
                rootMargin="-50px"
                textAlign="center"
              />
              <br />
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                <SplitText
                  text="Jair Sánchez"
                  tag="span"
                  className="block"
                  delay={60}
                  duration={0.6}
                  ease="power2.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.3}
                  rootMargin="-50px"
                  textAlign="center"
                />
              </div>
            </h1>
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            data-aos-duration="500"
            className="mb-4"
          >
            <div className="text-base md:text-lg lg:text-xl mb-3 max-w-2xl mx-auto leading-relaxed font-light text-center" style={{ color: 'color-mix(in srgb, var(--fg) 70%, transparent)' }}>
              <TextType
                text={t('home.typingTexts', { returnObjects: true }) as string[]}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2500}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-indigo-500"
                startOnVisible={true}
                className="inline-block"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            data-aos-duration="500"
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 text-sm"
              aria-label="View my projects and work"
              role="button"
              tabIndex={0}
            >
              {t('home.viewWork')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-2.5 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-semibold rounded-full transition-all duration-300 cursor-pointer hover:scale-105 text-sm"
              aria-label="Get in touch with me"
              role="button"
              tabIndex={0}
            >
              {t('home.getInTouch')}
            </Link>
          </div>

          {/* Social Links */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="500"
            data-aos-duration="500"
            className="flex justify-center space-x-4 mb-6"
          >
            <a
              href="https://github.com/jssanchez03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-indigo-500 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
              aria-label="Visit Jair Sanchez GitHub profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/jair-sanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-indigo-500 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
              aria-label="Visit Jair Sanchez LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:jairssan03@gmail.com"
              className="p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[var(--fg)] hover:text-indigo-500 hover:scale-110"
              style={{ background: 'color-mix(in srgb, var(--bg) 85%, white)' }}
              aria-label="Send email to Jair Sanchez"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="600"
        data-aos-duration="500"
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
          <span className="text-sm mb-2">
            {t('home.scrollDown')}
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};