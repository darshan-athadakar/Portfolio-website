import { FaCertificate } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <FaCertificate className="text-cyan-400 text-2xl mr-3" />
        <h3 className="text-xl font-bold text-white">Certifications</h3>
      </div>
      <ul className="space-y-3">
        {certifications.map((cert, index) => (
          <li key={index} className="border-l-2 border-blue-500 pl-4">
            <p className="text-white font-semibold">{cert.name}</p>
            <p className="text-slate-400 text-sm">{cert.issuer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
