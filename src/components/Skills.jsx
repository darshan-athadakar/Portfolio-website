import { 
  FaCode, 
  FaReact, 
  FaDatabase, 
  FaServer, 
  FaDocker, 
  FaCloud, 
  FaCheckCircle, 
  FaBrain,
  FaNetworkWired,
  FaStream,
  FaChartLine,
  FaTools,
  FaCubes,
  FaProjectDiagram
} from 'react-icons/fa';
import { skills } from '../data/skills';

const iconMap = {
  FaCode: FaCode,
  FaReact: FaReact,
  FaDatabase: FaDatabase,
  FaServer: FaServer,
  FaDocker: FaDocker,
  FaCloud: FaCloud,
  FaCheckCircle: FaCheckCircle,
  FaBrain: FaBrain,
  FaNetworkWired: FaNetworkWired,
  FaStream: FaStream,
  FaChartLine: FaChartLine,
  FaTools: FaTools,
  FaCubes: FaCubes,
  FaProjectDiagram: FaProjectDiagram
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive expertise across the full technology stack, from backend microservices to frontend development, cloud infrastructure, and AI integration
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:scale-105 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {IconComponent && <IconComponent className="text-blue-400 text-3xl mr-3" />}
                  <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => {
                    const isPrimary = skill.primary && skill.primary.includes(tech);
                    return (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isPrimary
                            ? 'bg-blue-500 text-white font-semibold'
                            : 'bg-slate-700 text-blue-400'
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
