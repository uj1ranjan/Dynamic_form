import "./sidebar.css";
import {
  LineStyle,
  VideoLabel,
  Sort,
  ScannerTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">M365 Request Catalog</h2>
          <ul className="sidebarList">
            <Link to="/" className="link">
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                        Messaging
                </li>
            </Link>
            <Link to="/AVD" className="link">
                <li className="sidebarListItem active">
                    <VideoLabel className="sidebarIcon" />
                    Azure Virtual Desktop
                </li>
            </Link>
            <Link to="/END" className="link">
                <li className="sidebarListItem active">
                    <Sort className="sidebarIcon" />
                    Endpoint Management
                </li>
            </Link>
            <Link to="/Collaboration" className="link">
                <li className="sidebarListItem active">
                    <ScannerTwoTone className="sidebarIcon" />
                    Collaboration
                </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
