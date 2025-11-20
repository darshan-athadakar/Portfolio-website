import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/education';

const Education = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-start mb-4">
        <FaGraduationCap className="text-blue-400 text-3xl mr-4 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
          <p className="text-cyan-400 mb-1">{education.institution}</p>
          <p className="text-slate-400 mb-3">{education.location} • {education.duration}</p>
          <div>
            <p className="text-sm font-semibold text-slate-400 mb-2">Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
