export default function Navbar() {
    return (
<nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white px-4 py-6 md:px-8 flex justify-between items-center">
        <div className="text-red-600 font-bold text-5xl tracking-tighter ml-25">NETFLIX</div>
        <div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
            Sign In
          </button>
        </div>
      </nav>
    );
  }