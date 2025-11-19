import { FaTrophy } from 'react-icons/fa';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <FaTrophy className="text-yellow-400 text-2xl mr-3" />
        <h3 className="text-xl font-bold text-white">Achievements</h3>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="border-l-2 border-cyan-500 pl-4">
            <p className="text-white font-semibold">{achievement.title}</p>
            <p className="text-slate-400 text-sm">{achievement.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
