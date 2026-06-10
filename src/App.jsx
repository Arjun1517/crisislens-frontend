import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReportIncident from "./pages/ReportIncident";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report" element={<ReportIncident />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;