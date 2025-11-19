import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle, FaCode } from 'react-icons/fa';
import { profile } from '../data/profile';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    "1+ year building full-stack applications with Spring Boot & React",
    "Proficient in RESTful APIs, microservices & database optimization",
    "Delivered projects with 95% on-time completion rate",
    "Strong focus on code quality with 85%+ test coverage"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Profile Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center" role="img" aria-label="Developer icon">
                <FaCode className="text-5xl text-blue-400" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-3">
            {profile.title}
          </h2>
          <p className="text-lg text-slate-400 mb-8 flex items-center justify-center">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {profile.experience}
          </p>

          {/* Professional Summary - Better Formatted */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              <span className="text-blue-400 font-semibold">Java Full Stack Developer</span> with experience in 
              <span className="text-cyan-400 font-semibold"> microservices architecture</span>, 
              <span className="text-cyan-400 font-semibold"> RESTful APIs</span>, and 
              <span className="text-cyan-400 font-semibold"> modern web applications</span> using Spring Boot and React.
            </p>
            
            {/* Key Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start text-left bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                  <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base">{highlight}</span>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Experienced in <span className="text-blue-400 font-semibold">database optimization</span>, 
              <span className="text-cyan-400 font-semibold"> distributed caching</span>, 
              <span className="text-blue-400 font-semibold"> cloud infrastructure</span> (AWS, Docker, Kubernetes), and 
              <span className="text-cyan-400 font-semibold"> responsive UI development</span> to build scalable enterprise applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Email Contact"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg hover:shadow-blue-500/50"
          >
            Let's Connect
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-sm text-slate-400">REST APIs Built</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400">5+</div>
              <div className="text-sm text-slate-400">Projects Delivered</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-sm text-slate-400">Sprint Completion</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <div className="text-3xl font-bold text-yellow-400">85%+</div>
              <div className="text-sm text-slate-400">Code Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
