import { useTranslation } from 'react-i18next';
import { ExternalLink, Award, Calendar } from 'lucide-react';
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
      title: "Administrador de bases de datos",
      issuer: "Capacítate para el Empleo",
      date: "2023",
      imageId: "Captura_de_pantalla_2025-09-09_173651_dact0q",
      credentialUrl: "https://capacitateparaelempleo.org/verifica/d391207e-15fa-41e7-b947-8cc9d224a8b2/4b47531c-29ad-49c0-8e4b-9727046cdc7e",
      skills: ["Bases de Datos", "SQL", "Administración", "MySQL"],
      hours: "83 horas",
      type: "Curso",
      score: "9.67"
    },
    {
      id: 2,
      title: "Lógica de programación",
      issuer: "Capacítate para el Empleo",
      date: "2021",
      imageId: "Captura_de_pantalla_2025-09-09_173624_ujvuk7",
      credentialUrl: "https://capacitateparaelempleo.org/verifica/d391207e-15fa-41e7-b947-8cc9d224a8b2/085cc047-6ac3-43f2-8037-872922f74147",
      skills: ["Lógica", "Algoritmos", "Programación", "Fundamentos"],
      folio: "6l9j6ugwm",
      hours: "60 horas",
      type: "Curso"
    },
    {
      id: 3,
      title: "Introducción a la Programación",
      issuer: "Universidad de las Fuerzas Armadas ESPE",
      date: "2022",
      imageId: "Captura_de_pantalla_2025-09-09_170552_imqcrq",
      credentialUrl: "https://qrco.de/bcx7Ob",
      skills: ["Programación", "Fundamentos", "Algoritmos", "Desarrollo"],
      hours: "40 horas",
      location: "Santo Domingo",
      type: "Curso"
    },
    {
      id: 4,
      title: "Funciones reales y sus aplicaciones a la ingeniería",
      issuer: "Universidad Técnica de Manabí",
      date: "2022",
      imageId: "Captura_de_pantalla_2025-09-09_170640_ys0bwi",
      credentialUrl: "https://utm.edu.ec/posgrado/servicios/servicios-web/consultar-certificado",
      skills: ["Matemáticas", "Funciones", "Ingeniería", "Análisis"],
      hours: "2 horas",
      type: "Webinar"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                className="group rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col"
                style={{ background: 'var(--card-bg)', minHeight: '400px' }}
              >
                {/* Certificate Image */}
                <div className="relative h-32 overflow-hidden flex-shrink-0">
                  <AdvancedImage
                    cldImg={createOptimizedImage(certificate.imageId)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={certificate.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-2 right-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2" style={{ color: 'var(--fg)' }}>
                      {certificate.title}
                    </h3>
                    
                    <div className="flex items-center mb-2" style={{ color: 'var(--muted)' }}>
                      <span className="text-xs font-medium">{certificate.issuer}</span>
                    </div>

                    <div className="flex items-center mb-3" style={{ color: 'var(--muted)' }}>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="text-xs">{certificate.date}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {certificate.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs rounded-full"
                          style={{ background: 'var(--section-bg)', color: 'var(--fg)' }}
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="text-xs" style={{ color: 'var(--muted)' }}>
                          +{certificate.skills.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Additional Information - Only show hours and type */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs" style={{ color: 'var(--muted)' }}>
                        <span>{t('certificates.hours')}:</span>
                        <span>{certificate.hours}</span>
                      </div>
                      {certificate.type && (
                        <div className="flex justify-between text-xs" style={{ color: 'var(--muted)' }}>
                          <span>{t('certificates.type')}:</span>
                          <span>{certificate.type}</span>
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
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-md transition-all duration-200 w-full hover:scale-105"
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
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium rounded-lg transition-all duration-200 hover:scale-105">
              {t('certificates.viewMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};