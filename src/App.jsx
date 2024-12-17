import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import UserDashboard from "./pages/userdashboard/UserDashboard";
import AdminDashboard from "./pages/admindashboard/AdminDashboard";
import Ruta1Page from "./pages/ruta1/Ruta1Page"; // Nueva página
import Ruta2Page from "./pages/ruta2/Ruta2Page"; // Nueva página

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
