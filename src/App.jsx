import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Ruta1Page from "./pages/Ruta1Page"; // Nueva página
import Ruta2Page from "./pages/Ruta2Page"; // Nueva página

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/ruta1" element={<Ruta1Page />} />
        <Route path="/ruta2" element={<Ruta2Page />} /> {/* Nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
