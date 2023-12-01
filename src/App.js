import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import AVDHome from "./pages/home/AVDHome";
import ENDHome from "./pages/home/ENDHome";
import CollabHome from "./pages/home/CollabHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MsalProvider } from '@azure/msal-react';
import Form from "./Form/Form";
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import Form4 from "./Form/Form4";
import Form5 from "./Form/Form5";
import Form6 from "./Form/Form6";
import Form7 from "./Form/Form7";
import Form8 from "./Form/Form8";
import Form9 from "./Form/Form9";
import Form10 from "./Form/Form10";
import Form11 from "./Form/Form11";
import Form12 from "./Form/Form12";
import Form13 from "./Form/Form13";

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <Router>
        <div className="topbar">
          <Topbar />
        </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="Grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AVD" element={<AVDHome />} />
            <Route path="/END" element={<ENDHome />} />
            <Route path="/Collaboration" element={<CollabHome />} />
            <Route className = "wrapper" path="/DW Messaging Service Request-sharedMailbox" element={<Form />} />
            <Route className = "wrapper" path="/setMailboxQuota" element={<Form2 />} />
            <Route className = "wrapper" path="/DW Messaging Service Request-createDistributionList" element={<Form3 />} />
            <Route className = "wrapper" path="/DW Messaging Service Request-manageMailboxPermission" element={<Form4 />} />
            <Route className = "wrapper" path="/DW Messaging Service Request-Mailboxdeletion" element={<Form5 />} />
            <Route className = "wrapper" path="/Collaboration/ProvisionMSTeams" element={<Form6 />} />
            <Route className = "wrapper" path="/modifyPrimarySMTP" element={<Form7 />} />
            <Route className = "wrapper" path="/addSecondarySMTP" element={<Form8 />} />
            <Route className = "wrapper" path="/removeSecondarySMTP" element={<Form9 />} />
            <Route className = "wrapper" path="/emailForwarding" element={<Form10 />} />
            <Route className = "wrapper" path="/" element={<Form11 />} />
            <Route className = "wrapper" path="/enableOnlineArchive" element={<Form12 />} />
            <Route className = "wrapper" path="/enableLitigationHold" element={<Form13 />} />
          </Routes>
          </div>
      </Router>
    </MsalProvider>
  );
}

export default App;
