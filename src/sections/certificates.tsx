import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Certificates = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      image: "/api/placeholder/300/200", // Replace with actual certificate image
      credentialUrl: "https://example.com/certificate1",
      skills: ["React", "JavaScript", "Frontend Development"]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      image: "/api/placeholder/300/200",
      credentialUrl: "https://example.com/certificate2",
      skills: ["HTML", "CSS", "JavaScript", "Node.js"]
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/api/placeholder/300/200",
      credentialUrl: "https://example.com/certificate3",
      skills: ["AWS", "Cloud Computing", "DevOps"]
    },
    {
      id: 4,
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2022",
      image: "/api/placeholder/300/200",
      credentialUrl: "https://example.com/certificate4",
      skills: ["Python", "Data Science", "Machine Learning"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="100" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('certificates.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('certificates.subtitle')}
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <span className="text-sm">{t('certificates.issuedBy')}: </span>
                    <span className="text-sm font-medium ml-1">{certificate.issuer}</span>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{certificate.date}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 w-full justify-center hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('certificates.viewCertificate')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "15+", label: "Certificates Earned" },
              { number: "5+", label: "Platforms" },
              { number: "50+", label: "Skills Validated" },
              { number: "2024", label: "Latest Achievement" }
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={700 + index * 100}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};