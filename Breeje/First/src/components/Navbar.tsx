import Button from "./UI/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-xl font-bold">Algen</div>
      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li>Features</li>
        <li>Pricing</li>
        <li>Solutions</li>
        <li>Resources</li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-300">Sign In</button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}
