import { Routes, Route } from "react-router-dom";
import PainelAdm from "../pages/painelAdm";
import PainelNovoForm from "../pages/painelNovoForm";
import PainelProcesso from "../pages/painelProcesso";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<PainelAdm />} />
        <Route path="/inscricao" element={<PainelProcesso />} />
        <Route path="/formulario" element={<PainelNovoForm />} />
      </Routes>
  );
}

export default AppRoutes;
