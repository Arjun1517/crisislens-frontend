import Navbar from "../components/Navbar";
import { useState } from "react";
function ReportIncident() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      description,
      location,
      image,
    });

    alert("Incident Submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">
          Report an Incident
        </h1>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            className="w-full border rounded-lg p-3 mb-4"
            rows="4"
            placeholder="Describe the incident..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label className="block mb-2 font-medium">
            Location
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3 mb-4"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label className="block mb-2 font-medium">
            Upload Image
          </label>

          <input
            type="file"
            className="mb-6"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportIncident;