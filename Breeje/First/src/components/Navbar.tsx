import Button from "./UI/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-0 w-full z-30">
      <div className="backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* left: brand */}
          <div className="flex items-center gap-3">
            <span className="text-white text-4xl font-extrabold ">∞</span>
            <span className="text-white text-xl font-bold"> ALQEN</span>
          </div>

          {/* middle: links */}
          <ul className="hidden lg:flex items-center gap-8 text-md text-gray-300">
            <li className="hover:text-white transition">Features</li>
            <li className="hover:text-white transition">Pricing</li>
            <li className="hover:text-white transition">Solutions</li>
            <li className="hover:text-white transition">Resources</li>
          </ul>

          {/* right: actions */}
          <div className="flex items-center gap-4">
            <button className="text-gray-300 text-sm hover:text-white transition">Sign in</button>
            <Button className="shadow-md px-3 py-2">Get started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}