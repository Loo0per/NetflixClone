import Image from 'next/image';
import bgimage from '../public/images/bg1.jpg';

export default function Hero() {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      <Image
        src= {bgimage}
        alt="Hero Background"
        fill
        className="object-cover opacity-25"
        priority
      />
       <div className="relative z-10 text-center px-4 md:px-0 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV <br/>shows, and more
        </h1>
        <p className="text-xl md:text-2xl mb-6">Starts at USD 2.99. Cancel anytime.</p>
        <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}