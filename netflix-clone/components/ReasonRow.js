import ReasonCard from './ReasonCard';
import { reasons } from '../data/Reasons.js';

export default function ReasonRow({title}) {
  return (
    <div className="bg-black text-white px-4 py-8 md:px-30">
      <h2 className="text-2xl md:text-3xl font-bold mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-5">
        {reasons.map((reason) => (
          <ReasonCard key={reason.id} reason={reason} />
        ))}
      </div>
    </div>
  );
}