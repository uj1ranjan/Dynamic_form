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
import Form14 from "./Form/Form14";
import Form15 from "./Form/Form15";
import Form16 from "./Form/Form16";
import Form17 from "./Form/Form17";

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
            <Route className = "wrapper" path="/createSharedMailbox" element={<Form />} />
            <Route className = "wrapper" path="/setMailboxQuota" element={<Form2 />} />
            <Route className = "wrapper" path="/createDistributionList" element={<Form3 />} />
            <Route className = "wrapper" path="/addMemberstoSharedMailbox" element={<Form4 />} />
            <Route className = "wrapper" path="/changeSharedMailboxAddress" element={<Form5 />} />
            <Route className = "wrapper" path="/Collaboration/ProvisionMSTeams" element={<Form6 />} />
            <Route className = "wrapper" path="/modifyPrimarySMTP" element={<Form7 />} />
            <Route className = "wrapper" path="/addSecondarySMTP" element={<Form8 />} />
            <Route className = "wrapper" path="/removeSecondarySMTP" element={<Form9 />} />
            <Route className = "wrapper" path="/emailForwarding" element={<Form10 />} />
            <Route className = "wrapper" path="/" element={<Form11 />} />
            <Route className = "wrapper" path="/enableOnlineArchive" element={<Form12 />} />
            <Route className = "wrapper" path="/enableLitigationHold" element={<Form13 />} />
            <Route className = "wrapper" path="/modifySharedMailboxName" element={<Form14 />} />
            <Route className = "wrapper" path="/modifyDistributionList" element={<Form15 />} />
            <Route className = "wrapper" path="/deleteDistributionList" element={<Form16 />} />
            <Route className = "wrapper" path="/removeMembersfromSharedMailbox" element={<Form17 />} />
          </Routes>
          </div>
      </Router>
    </MsalProvider>
  );
}

export default App;
