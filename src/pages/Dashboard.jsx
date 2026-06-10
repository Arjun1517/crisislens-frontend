import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import IncidentMap from "../components/IncidentMap";
import API from "../services/api";

function Dashboard() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const response = await API.get("/incidents");
      setIncidents(response.data);
    } catch (error) {
      console.error("Error fetching incidents:", error);
    }
  };

  const highSeverityCount = incidents.filter(
    (incident) => incident.severityScore >= 7
  ).length;

  const activeAlertsCount = incidents.filter(
    (incident) => incident.status === "ACTIVE"
  ).length;

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
            <p className="text-3xl font-bold">
              {incidents.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">High Severity</h2>
            <p className="text-3xl font-bold text-red-600">
              {highSeverityCount}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-gray-500">Active Alerts</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {activeAlertsCount}
            </p>
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
              {incidents.map((incident) => (
                <tr key={incident.id} className="border-b">
                  <td className="py-3">
                    {incident.category}
                  </td>

                  <td>
                    {incident.location}
                  </td>

                  <td>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                      {incident.severityScore}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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