import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlatDetail from "./pages/FlatDetail";
import AllFlats from "./pages/AllFlats";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allflats" element={<AllFlats />}/>
          <Route path="/allflats/:flatId" element={<FlatDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;