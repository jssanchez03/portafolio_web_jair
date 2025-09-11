import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Masonry from '../components/Masonry';
import Modal from '../components/ui/Modal';
import ImagePreview from '../components/ui/ImagePreview';
import { useState } from 'react';

export const Projects = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<any>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Projects data with real projects
  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614448/Captura_de_pantalla_2025-09-11_130835_oavuqg.png",
      technologies: ["Node.js", "Express", "React", "Vite", "TypeScript", "Tailwind CSS", "MySQL", "HTML5", "CSS3"],
      liveUrl: "https://evaluacion.istla-sigala.edu.ec/",
      githubUrl: "#",
      featured: true,
      gallery: [
        {
          id: "1-1",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614448/Captura_de_pantalla_2025-09-11_130835_oavuqg.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 600
        },
        {
          id: "1-2",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614449/Captura_de_pantalla_2025-09-11_130907_cwht4m.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 300
        },
        {
          id: "1-3",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614546/Captura_de_pantalla_2025-09-11_131534_b5lv5l.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 800
        },
        {
          id: "1-4",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614463/Captura_de_pantalla_2025-09-11_131106_dalh0p.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 250
        },
        {
          id: "1-5",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614464/Captura_de_pantalla_2025-09-11_131132_a9cuxf.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 550
        },
        {
          id: "1-6",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614449/Captura_de_pantalla_2025-09-11_130930_q5bq7y.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 320
        },
        {
          id: "1-7",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614450/Captura_de_pantalla_2025-09-11_130948_txiiy5.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 700
        },
        {
          id: "1-8",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614450/Captura_de_pantalla_2025-09-11_131003_wupcik.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 280
        },
        {
          id: "1-9",
          img: "https://res.cloudinary.com/dq8at3uoc/image/upload/v1757614463/Captura_de_pantalla_2025-09-11_131041_d6ezbm.png",
          url: "https://evaluacion.istla-sigala.edu.ec/",
          height: 450
        }
      ]
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "/api/placeholder/400/250",
      technologies: ["NFC", "Flutter", "Dart", "Material Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/jssanchez03",
      featured: true,
      gallery: [
        {
          id: "2-1",
          img: "/api/placeholder/300/400",
          url: "#",
          height: 400
        },
        {
          id: "2-2",
          img: "/api/placeholder/300/350",
          url: "#",
          height: 350
        },
        {
          id: "2-3",
          img: "/api/placeholder/300/450",
          url: "#",
          height: 450
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ background: 'var(--section-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          {/* Section Header */}
          <div data-aos="fade-up" data-aos-delay="50" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>
              {t('projects.title')}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="space-y-6">
                {/* Project Card */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                  className="group relative rounded-xl border backdrop-blur-sm overflow-hidden min-h-[480px] flex flex-col"
                  style={{ 
                    background: 'var(--card-bg)', 
                    border: '1px solid var(--border)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformOrigin: 'center center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0px)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-xl"
                      style={{
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-t-xl bg-black/50 flex items-center justify-center"
                      style={{
                        opacity: '0',
                        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    >
                      <div className="flex space-x-4">
                        {project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
                            style={{
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                              e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
                            style={{
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              transform: 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                              e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        <button
                          onClick={() => {
                            setModalProject(project);
                            setIsModalOpen(true);
                          }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
                          style={{
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'scale(1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-white text-sm font-semibold rounded-full shadow-lg" style={{ background: 'var(--primary)' }}>
                          {t('projects.featured')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--fg)' }}>
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-semibold rounded-full"
                          style={{
                            background: 'var(--section-alt-bg)',
                            border: '1px solid var(--border)',
                            color: 'var(--fg)',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'scale(1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 text-white text-sm font-semibold rounded-full shadow-lg"
                          style={{ 
                            background: 'var(--primary)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'scale(1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.03)';
                            e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(0, 0, 0, 0.25)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(0, 0, 0, 0.1)';
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('projects.viewProject')}
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 border-2 text-sm font-semibold rounded-full shadow-lg"
                          style={{ 
                            borderColor: 'var(--primary)', 
                            color: 'var(--primary)', 
                            background: 'transparent',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'scale(1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--primary)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1.03)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--primary)';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          <Github className="w-4 h-4" />
                          {t('projects.viewCode')}
                        </a>
                      )}
                      <button
                        onClick={() => {
                          setModalProject(project);
                          setIsModalOpen(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 border-2 text-sm font-semibold rounded-full shadow-lg"
                        style={{ 
                          borderColor: 'var(--muted)', 
                          color: 'var(--muted)', 
                          background: 'transparent',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: 'scale(1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--muted)';
                          e.currentTarget.style.color = 'var(--bg)';
                          e.currentTarget.style.transform = 'scale(1.03)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--muted)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <Eye className="w-4 h-4" />
                        {t('projects.viewGallery')}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Gallery Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setModalProject(null);
            }}
          >
            {modalProject && modalProject.gallery && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full max-w-6xl">
                  <Masonry
                    items={modalProject.gallery}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={1.05}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                    onImageClick={(imageUrl) => {
                      const images = modalProject.gallery.map((item: any) => item.img);
                      const index = images.indexOf(imageUrl);
                      setGalleryImages(images);
                      setCurrentImageIndex(index);
                      setPreviewImage(imageUrl);
                      setIsPreviewOpen(true);
                    }}
                  />
                </div>
              </div>
            )}
          </Modal>

          {/* Image Preview */}
          <ImagePreview
            isOpen={isPreviewOpen}
            onClose={() => {
              setIsPreviewOpen(false);
              setPreviewImage('');
              setGalleryImages([]);
              setCurrentImageIndex(0);
            }}
            imageUrl={previewImage}
            images={galleryImages}
            currentIndex={currentImageIndex}
            onNavigate={(direction) => {
              const newIndex = direction === 'next' 
                ? Math.min(currentImageIndex + 1, galleryImages.length - 1)
                : Math.max(currentImageIndex - 1, 0);
              setCurrentImageIndex(newIndex);
              setPreviewImage(galleryImages[newIndex]);
            }}
          />

          {/* View More Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center mt-12"
          >
            <a
              href="https://github.com/jssanchez03" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-full"
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6366f1';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#6366f1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Github className="w-5 h-5" />
              {t('projects.viewMoreGitHub')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};