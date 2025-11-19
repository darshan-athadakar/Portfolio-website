import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTag, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
          Showcase of enterprise-grade backend systems demonstrating expertise in microservices architecture, RESTful API design, database optimization, and distributed systems
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects[index];
            const displayFeatures = isExpanded ? project.features : project.features.slice(0, 4);
            const hasMoreFeatures = project.features.length > 4;

            return (
              <div
                key={index}
                className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                  {project.category && (
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                      <FaTag className="text-cyan-400 mr-2 text-sm" />
                      <span className="text-white text-sm font-semibold">{project.category}</span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 8).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-800 text-blue-400 rounded text-xs border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 8 && (
                        <span className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-xs border border-slate-700">
                          +{project.techStack.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {displayFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-slate-400 flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">✓</span>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Expand/Collapse Button */}
                    {hasMoreFeatures && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-3 flex items-center text-blue-400 hover:text-cyan-400 transition-colors text-sm font-semibold"
                      >
                        {isExpanded ? (
                          <>
                            <FaChevronUp className="mr-2" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <FaChevronDown className="mr-2" />
                            View All {project.features.length} Features
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-4 border-t border-slate-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        <FaGithub className="mr-2" />
                        <span className="text-sm font-semibold">View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        <span className="text-sm font-semibold">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
