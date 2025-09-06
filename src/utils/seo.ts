export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const updateSEO = (data: SEOData) => {
  // Update document title
  document.title = data.title;

  // Update meta description
  updateMetaTag('description', data.description);

  // Update keywords if provided
  if (data.keywords) {
    updateMetaTag('keywords', data.keywords);
  }

  // Update Open Graph tags
  updateMetaProperty('og:title', data.title);
  updateMetaProperty('og:description', data.description);
  updateMetaProperty('og:type', data.type || 'website');
  
  if (data.image) {
    updateMetaProperty('og:image', data.image);
  }
  
  if (data.url) {
    updateMetaProperty('og:url', data.url);
    updateLinkTag('canonical', data.url);
  }

  // Update Twitter tags
  updateMetaProperty('twitter:title', data.title);
  updateMetaProperty('twitter:description', data.description);
  
  if (data.image) {
    updateMetaProperty('twitter:image', data.image);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  
  element.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  
  element.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  
  element.href = href;
};

// Predefined SEO data for different sections
export const seoData = {
  home: {
    title: 'Jair - Desarrollador Full Stack | Portfolio',
    description: 'Portfolio de Jair, desarrollador Full Stack especializado en React, TypeScript, Node.js y tecnologías modernas. Creando experiencias digitales increíbles.',
    keywords: 'desarrollador, full stack, react, typescript, nodejs, portfolio, programador, web developer',
    type: 'website'
  },
  about: {
    title: 'Acerca de Jair - Desarrollador Full Stack',
    description: 'Conoce más sobre Jair, su experiencia en desarrollo web, habilidades técnicas y pasión por crear soluciones innovadoras.',
    keywords: 'sobre mi, experiencia, desarrollador, habilidades, tecnologías'
  },
  projects: {
    title: 'Proyectos de Jair - Portfolio de Desarrollo',
    description: 'Explora los proyectos más destacados de Jair, incluyendo aplicaciones web, APIs y soluciones full stack con tecnologías modernas.',
    keywords: 'proyectos, portfolio, aplicaciones web, desarrollo, react, nodejs'
  },
  skills: {
    title: 'Habilidades Técnicas - Jair Desarrollador',
    description: 'Descubre las habilidades técnicas de Jair en frontend, backend, bases de datos y herramientas de desarrollo modernas.',
    keywords: 'habilidades, tecnologías, frontend, backend, react, nodejs, python'
  },
  certificates: {
    title: 'Certificaciones - Jair Desarrollador Full Stack',
    description: 'Certificaciones profesionales de Jair en desarrollo web, cloud computing y tecnologías modernas.',
    keywords: 'certificaciones, cursos, formación, desarrollo profesional'
  },
  contact: {
    title: 'Contacto - Jair Desarrollador Full Stack',
    description: '¿Tienes un proyecto en mente? Contacta con Jair para discutir oportunidades de colaboración y desarrollo.',
    keywords: 'contacto, colaboración, proyectos, desarrollo, freelance'
  }
};
