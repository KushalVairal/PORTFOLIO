import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'Kingdom RPG Game',
      description: 'An immersive RPG game built with vanilla web technologies, featuring interactive gameplay and engaging storyline.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/KushalVairal/Kingdom-RPG',
      liveUrl: 'https://kushalvairal.github.io/Kingdom-RPG/',
    },
    {
      title: 'WeatherNow',
      description: 'A weather forecasting application that provides real-time weather data using the OpenWeatherMap API.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      githubUrl: 'https://github.com/KushalVairal/Weather-Forecast-Website',
      liveUrl: 'https://kushalvairal.github.io/Weather-Forecast-Website/',
    },
    {
      title: 'Calculator App',
      description: 'A sleek and functional web calculator supporting basic arithmetic operations with a modern interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/KushalVairal/Calculator',
      liveUrl: 'https://kushalvairal.github.io/Calculator/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;