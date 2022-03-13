import "./styles.css";
import AirlineSearch from "./AirlineSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AirlineSearch />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
