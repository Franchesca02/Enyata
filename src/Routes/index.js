import { Routes, Route } from "react-router-dom";
import Login from "../Components/Pages/Login";
import Starship from "../Components/Pages/Starship";
import People from "../Components/Pages/People";
import Species from "../Components/Pages/Species";
import Overview from "../Components/Pages/Overview";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/starship" element={<Starship />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/people" element={<People />} />
      <Route path="/species" element={<Species />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
