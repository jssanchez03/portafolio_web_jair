import { useTranslation } from 'react-i18next';
import { ExternalLink, Award, Calendar, Clock, BookOpen } from 'lucide-react';
import { type MouseEvent } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

export const Certificates = () => {
  const { t } = useTranslation();

  // Initialize Cloudinary
  const cld = new Cloudinary({ cloud: { cloudName: 'dq8at3uoc' } });

  // Certificates data with Cloudinary images
  const certificates = [
    {
      id: 1,
      title: t('certificates.certificates.cert1.title', 'Administrador de bases de datos'),
      issuer: t('certificates.certificates.cert1.issuer', 'Capacítate para el Empleo'),
      date: "2023",
      imageId: "Captura_de_pantalla_2025-09-09_173651_dact0q",
      credentialUrl: "https://capacitateparaelempleo.org/verifica/d391207e-15fa-41e7-b947-8cc9d224a8b2/4b47531c-29ad-49c0-8e4b-9727046cdc7e",
      skills: ["Bases de Datos", "SQL", "Administración", "MySQL"],
      hours: t('certificates.hours', '83 horas').replace('Horas', '83 horas').replace('Hours', '83 hours'),
      type: t('certificates.certificates.cert1.type', 'Curso'),
      score: "9.67"
    },
    {
      id: 2,
      title: t('certificates.certificates.cert2.title', 'Lógica de programación'),
      issuer: t('certificates.certificates.cert2.issuer', 'Capacítate para el Empleo'),
      date: "2021",
      imageId: "Captura_de_pantalla_2025-09-09_173624_ujvuk7",
      credentialUrl: "https://capacitateparaelempleo.org/verifica/d391207e-15fa-41e7-b947-8cc9d224a8b2/085cc047-6ac3-43f2-8037-872922f74147",
      skills: ["Lógica", "Algoritmos", "Programación", "Fundamentos"],
      folio: "6l9j6ugwm",
      hours: "60 " + t('certificates.hours', 'horas').toLowerCase(),
      type: t('certificates.certificates.cert2.type', 'Curso')
    },
    {
      id: 3,
      title: t('certificates.certificates.cert3.title', 'Introducción a la Programación'),
      issuer: t('certificates.certificates.cert3.issuer', 'Universidad de las Fuerzas Armadas ESPE'),
      date: "2022",
      imageId: "Captura_de_pantalla_2025-09-09_170552_imqcrq",
      credentialUrl: "https://qrco.de/bcx7Ob",
      skills: ["Programación", "Fundamentos", "Algoritmos", "Desarrollo"],
      hours: "40 " + t('certificates.hours', 'horas').toLowerCase(),
      location: "Santo Domingo",
      type: t('certificates.certificates.cert3.type', 'Curso')
    },
    {
      id: 4,
      title: t('certificates.certificates.cert4.title', 'Funciones reales y sus aplicaciones a la ingeniería'),
      issuer: t('certificates.certificates.cert4.issuer', 'Universidad Técnica de Manabí'),
      date: "2022",
      imageId: "Captura_de_pantalla_2025-09-09_170640_ys0bwi",
      credentialUrl: "https://utm.edu.ec/posgrado/servicios/servicios-web/consultar-certificado",
      skills: ["Matemáticas", "Funciones", "Ingeniería", "Análisis"],
      hours: "2 " + t('certificates.hours', 'horas').toLowerCase(),
      type: t('certificates.certificates.cert4.type', 'Webinar')
    }
  ];

  // Function to create optimized Cloudinary images
  const createOptimizedImage = (imageId: string) => {
    return cld
      .image(imageId)
      .format('auto')
      .quality('auto:best')
      .resize(auto().gravity(autoGravity()).width(500).height(350));
  };

  return (
    <section id="certificates" className="py-20" style={{ background: 'var(--section-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="100" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('certificates.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('certificates.subtitle')}
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                className="group rounded-xl shadow-md overflow-hidden flex flex-col"
                style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border)',
                  minHeight: '420px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center center'
                }}
                onMouseEnter={(e: MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'scale(1.02) translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e: MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                {/* Certificate Image */}
                <div className="relative h-36 overflow-hidden flex-shrink-0">
                  <AdvancedImage
                    cldImg={createOptimizedImage(certificate.imageId)}
                    className="w-full h-full object-cover"
                    alt={certificate.title}
                    style={{
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <div 
                      className="p-2 rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      <Award className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex-grow space-y-4">
                    {/* Title */}
                    <h3 className="text-sm font-semibold leading-tight line-clamp-2" style={{ color: 'var(--fg)' }}>
                      {certificate.title}
                    </h3>
                    
                    {/* Issuer */}
                    <div className="flex items-start">
                      <span className="text-xs font-medium leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {certificate.issuer}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs">{certificate.date}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs font-medium rounded-full"
                          style={{ 
                            background: 'var(--section-alt-bg)', 
                            color: 'var(--fg)',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'scale(1)'
                          }}
                          onMouseEnter={(e: MouseEvent<HTMLSpanElement>) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e: MouseEvent<HTMLSpanElement>) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 2 && (
                        <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
                          +{certificate.skills.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Information Cards - Mejorado sin espaciado excesivo */}
                    <div className="space-y-2">
                      {/* Duration */}
                      <div 
                        className="flex items-center gap-2 px-3 py-2 rounded-full"
                        style={{ 
                          background: 'var(--section-bg)', 
                          border: '1px solid var(--border)' 
                        }}
                      >
                        <Clock className="w-3 h-3 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--fg)' }}>
                          {certificate.hours}
                        </span>
                      </div>
                      
                      {/* Type */}
                      {certificate.type && (
                        <div 
                          className="flex items-center gap-2 px-3 py-2 rounded-full"
                          style={{ 
                            background: 'var(--section-bg)', 
                            border: '1px solid var(--border)' 
                          }}
                        >
                          <BookOpen className="w-3 h-3 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                          <span className="text-xs font-medium" style={{ color: 'var(--fg)' }}>
                            {certificate.type}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* View Certificate Button - Fixed at bottom */}
                  <div className="pt-4 mt-auto">
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-full w-full"
                      style={{
                        background: 'var(--primary)',
                        color: 'white',
                        border: '1px solid var(--primary)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'scale(1)'
                      }}
                      onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      {t('certificates.viewCertificate')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-full"
              style={{
                borderColor: '#615fff',
                color: '#615fff',
                background: 'transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = '#615fff';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#615fff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {t('certificates.viewMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};