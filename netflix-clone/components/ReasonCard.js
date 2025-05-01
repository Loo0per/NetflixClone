import Image from 'next/image';

export default function ReasonCard({ reason }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-lg shadow-lg relative min-h-[280px] flex flex-col">
      <div>
        <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
        <p className="text-gray-300">{reason.description}</p>
      </div>
      
      <div className="mt-auto self-end">
        {reason.icon ? (
          <Image
            src={reason.icon}
            alt={`${reason.title} icon`}
            width={64}
            height={64}
            className="rounded"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white">Icon</span>
          </div>
        )}
      </div>
    </div>
  );
}