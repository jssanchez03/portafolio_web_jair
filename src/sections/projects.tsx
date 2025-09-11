import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Eye } from 'lucide-react';

export const Projects = () => {
  const { t } = useTranslation();

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "/api/placeholder/400/250", // Replace with actual image
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jair/project1",
      featured: true
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jair/project2",
      featured: true
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "API Integration", "Chart.js", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jair/project3",
      featured: false
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "AOS", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/jair/project4",
      featured: false
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
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
                className="group relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border"
                style={{ background: 'var(--card-bg)', borderColor: 'var(--border)' }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full shadow-lg">
                        {t('projects.featured')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--fg)' }}>
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-2" style={{ color: 'var(--muted)' }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ background: 'var(--section-alt-bg)', color: 'var(--fg)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      {t('projects.viewProject')}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      {t('projects.viewCode')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
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
