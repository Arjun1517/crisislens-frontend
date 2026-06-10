import IncidentMap from "../components/IncidentMap";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6">
          CrisisLens AI Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Total Incidents</h2>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">High Severity</h2>
            <p className="text-3xl font-bold text-red-600">4</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Active Alerts</h2>
            <p className="text-3xl font-bold text-yellow-600">3</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Recent Incidents
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Category</th>
                <th className="text-left py-2">Location</th>
                <th className="text-left py-2">Severity</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Flood</td>
                <td>MG Road</td>
                <td>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                    High
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Accident</td>
                <td>Airport Road</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                    Medium
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-3">Fire</td>
                <td>Market Area</td>
                <td>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                    High
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Crisis Map */}
        <div className="bg-white rounded-xl shadow p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Crisis Map
          </h2>

          <IncidentMap />
        </div>
      </div>
    </>
  );
}

export default Dashboard;