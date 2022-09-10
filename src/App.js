import Login from "./Components/Pages/Login";
import Overview from "./Components/Pages/Overview";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Starship from "./Components/Pages/Starship";
import People from "./Components/Pages/People";
import Species from "./Components/Pages/Species";

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
        <Route path="/" element={<Login />} />
        <Route path="overview" element={ <Overview />} />
        <Route path="starship" element={ <Starship />} />
        <Route path="people" element={ <People />} />
        <Route path="species" element={ <Species />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
