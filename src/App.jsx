import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/pages/auth/Auth"; // Componente de Login/Register
import AgregarJugadores from "./components/pages/agregarjugadores/AgregarJugadores";
import ListarJugadores from "./components/pages/listarjugadores/ListarJugadores";
import { ProtectedLayout } from "./components/layout/protectedlayout/ProtectedLayout";
import ListarClientes from "./components/pages/listarclientes/ListarClientes";
import IngresosMensuales from "./components/pages/ingresosmensuales/IngresosMensuales";
import PagesClientes from "./components/pages/pagesclientes/PagesClientes";
// Layout Protegido

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/AgregarJugadores" element={<AgregarJugadores />} />
          <Route path="/ListarJugadores" element={<ListarJugadores />} />
          <Route path="/PagesClientes" element={<PagesClientes />} />
          <Route path="/ListarClientes" element={<ListarClientes />} />
          <Route path="/IngresosMensuales" element={<IngresosMensuales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
