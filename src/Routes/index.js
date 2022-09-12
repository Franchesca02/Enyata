import { Routes, Route } from "react-router-dom";
import Login from "../Components/Pages/Login";
import Starship from "../Components/Pages/Starship";
import People from "../Components/Pages/People";
import Species from "../Components/Pages/Species";
import Overview from "../Components/Pages/Overview";
import OverviewItem from "../Components/Pages/OverviewItem";
import StarshipItem from "../Components/Pages/StarshipItem";
import PeopleItem from "../Components/Pages/PeopleItem";
import SpecieItem from "../Components/Pages/SpecieItem";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/starship" element={<Starship />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/people" element={<People />} />
      <Route path="/species" element={<Species />} />
      <Route path="/" element={<Login />} />
      <Route path="/overviewitem" element={<OverviewItem />} />
      <Route path="/starshipitem" element={<StarshipItem />} />
      <Route path="/peopleitem" element={<PeopleItem />} />
      <Route path="/specieitem" element={<SpecieItem />} />
    </Routes>
  );
}

export default AppRoutes;
