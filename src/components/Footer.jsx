import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { profile } from '../data/profile';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          {/* Built With */}
          <div className="flex items-center text-slate-400 text-sm">
            <span className="mr-2">Built with</span>
            <FaReact className="text-cyan-400 mx-1" />
            <span className="mx-1">&</span>
            <SiTailwindcss className="text-cyan-400 mx-1" />
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center text-sm"
          >
            <span className="mr-2">Back to top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
