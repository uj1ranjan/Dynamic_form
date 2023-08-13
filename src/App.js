import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form"
import Form2 from "./Form2";
import Form3 from "./Form3"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route className = "wrapper" path="/dynamic1" element={<Form />} />
          <Route className = "wrapper" path="/dynamic2" element={<Form2 />} />
          <Route className = "wrapper" path="/dynamic3" element={<Form3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
