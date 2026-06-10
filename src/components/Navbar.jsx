import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          CrisisLens AI
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>

          <Link to="/report" className="hover:underline">
            Report Incident
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;