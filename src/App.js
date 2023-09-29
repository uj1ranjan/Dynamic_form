import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import AVDHome from "./pages/home/AVDHome";
import ENDHome from "./pages/home/ENDHome";
import CollabHome from "./pages/home/CollabHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import Form4 from "./Form/Form4";
import Form5 from "./Form/Form5";
import Form6 from "./Form/Form6";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AVD" element={<AVDHome />} />
          <Route path="/END" element={<ENDHome />} />
          <Route path="/Collaboration" element={<CollabHome />} />
          <Route className = "wrapper" path="/sharedMailbox" element={<Form />} />
          <Route className = "wrapper" path="/setMailBoxQuota" element={<Form2 />} />
          <Route className = "wrapper" path="/createDistributionList" element={<Form3 />} />
          <Route className = "wrapper" path="/manageMailboxPermission" element={<Form4 />} />
          <Route className = "wrapper" path="/MailboxDeletion" element={<Form5 />} />
          <Route className = "wrapper" path="/Collaboration/ProvisionMSTeams" element={<Form6 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
