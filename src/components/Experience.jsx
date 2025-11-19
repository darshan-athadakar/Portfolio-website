import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 border-l-4 border-blue-500 rounded-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <FaBriefcase className="text-blue-400 text-2xl mr-4 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-lg text-cyan-400 mb-1">{exp.company} • {exp.location}</p>
                  <p className="text-slate-400 mb-2">{exp.duration} • {exp.type}</p>
                  <p className="text-blue-300 font-semibold mb-4">Project: {exp.project}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-400 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-slate-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
