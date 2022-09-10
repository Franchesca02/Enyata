import Login from "./Components/Pages/Login";
import Overview from "./Components/Pages/Overview";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Starship from "./Components/Pages/Starship";

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
        <Route path="/" element={<Login />} />
        <Route path="overview" element={ <Overview />} />
        <Route path="starship" element={ <Starship />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
