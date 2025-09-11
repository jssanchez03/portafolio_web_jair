import { useTranslation } from 'react-i18next';
import TiltedCard from '../components/TiltedCard';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20" style={{ background: 'var(--section-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="500"
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4" 
              style={{ color: 'var(--fg)' }}
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              {t('about.title')}
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto" 
              style={{ color: 'var(--muted)' }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="400"
            >
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo with TiltedCard Animation */}
            <div 
              data-aos="fade-right" 
              data-aos-duration="500"
              data-aos-delay="300"
              className="flex justify-center lg:justify-start"
            >
              <TiltedCard
                imageSrc="https://res.cloudinary.com/dq8at3uoc/image/upload/v1757551623/20250604_171012_v27ulu.jpg"
                altText="Jair Sánchez - Full Stack Developer"
                captionText="Jair Sánchez"
                containerHeight="400px"
                containerWidth="320px"
                imageHeight="400px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
              />
            </div>

            {/* Right Column - Description and Skills */}
            <div 
              data-aos="fade-left" 
              data-aos-duration="500"
              data-aos-delay="400"
              className="space-y-8"
            >
              <div className="prose prose-lg">
                <p className="leading-relaxed text-lg" style={{ color: 'var(--muted)' }}>
                  {t('about.description')}
                </p>
              </div>

              {/* Skills Preview */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="400"
                className="p-6 rounded-xl"
                style={{ background: 'var(--section-alt-bg)' }}
              >
                <h3 
                  className="text-xl font-semibold mb-4" 
                  style={{ color: 'var(--fg)' }}
                >
                  {t('about.coretech')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Flutter', 'PHP', 'MySQL', 'Python', 'Java'].map((tech, index) => (
                    <span
                      key={tech}
                      data-aos="fade-in"
                      data-aos-delay={600 + index * 50}
                      data-aos-duration="300"
                      className="px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-110 transition-transform duration-200"
                      style={{ background: 'var(--card-bg)', color: 'var(--fg)', border: '1px solid var(--border)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="400"
                className="p-6 rounded-xl"
                style={{ background: 'var(--card-bg)' }}
              >
                <h3 
                  className="text-xl font-semibold mb-4" 
                  style={{ color: 'var(--fg)' }}
                >
                  {t('about.softSkills')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[t('about.teamwork'), t('about.communication'), t('about.adaptability'), t('about.problemSolving')].map((skill, index) => (
                    <span
                      key={skill}
                      data-aos="fade-in"
                      data-aos-delay={700 + index * 50}
                      data-aos-duration="300"
                      className="px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-110 transition-transform duration-200"
                      style={{ background: 'var(--section-alt-bg)', color: 'var(--fg)', border: '1px solid var(--border)' }}
                    >
                      {skill}
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