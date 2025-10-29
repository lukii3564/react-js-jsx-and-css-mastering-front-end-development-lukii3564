import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">🌾 AgriTrack</h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/crops" className="hover:underline">Crops</NavLink>
        <NavLink to="/tasks" className="hover:underline">Tasks</NavLink>
      </div>
    </nav>
  );
}
