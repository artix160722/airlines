import "./styles.css";
import AirlineSearch from "./AirlineSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AirlineSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
