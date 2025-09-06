export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'api';
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    longDescription: "Complete e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Features include real-time inventory management, order tracking, and responsive design.",
    image: "/api/placeholder/400/250", // Replace with actual image path
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Stripe", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jair/ecommerce-platform",
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: "2023-06",
    endDate: "2023-09"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    longDescription: "Modern task management application with team collaboration features, real-time updates, drag-and-drop functionality, and comprehensive project tracking.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jair/task-manager",
    featured: true,
    category: 'web',
    status: 'completed',
    startDate: "2023-03",
    endDate: "2023-05"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts",
    longDescription: "Interactive weather dashboard with geolocation support, 7-day forecasts, weather maps, and customizable widgets. Includes data visualization and weather alerts.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "API Integration", "Chart.js", "CSS3", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jair/weather-dashboard",
    featured: false,
    category: 'web',
    status: 'completed',
    startDate: "2023-01",
    endDate: "2023-02"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website with dark mode and animations",
    longDescription: "Personal portfolio website built with modern technologies, featuring dark/light mode, smooth animations, multilingual support, and responsive design.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "Framer Motion", "TailwindCSS", "i18next"],
    liveUrl: "https://jair-portfolio.com",
    githubUrl: "https://github.com/jair/portfolio",
    featured: false,
    category: 'web',
    status: 'completed',
    startDate: "2024-01",
    endDate: "2024-01"
  },
  {
    id: 5,
    title: "REST API Service",
    description: "Scalable REST API with authentication and documentation",
    longDescription: "Production-ready REST API service with comprehensive authentication, rate limiting, API documentation, and database optimization.",
    image: "/api/placeholder/400/250",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger", "Docker"],
    liveUrl: "https://api.example.com",
    githubUrl: "https://github.com/jair/rest-api-service",
    featured: false,
    category: 'api',
    status: 'completed',
    startDate: "2022-10",
    endDate: "2022-12"
  }
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};
