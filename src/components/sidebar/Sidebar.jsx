import "./sidebar.css";
import {
  Mail,
  VideoLabel,
  Sort,
  Group,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitle">M365 Request Catalog</h1>
          <ul className="sidebarList">
          <Link to="/AVD" className="link">
                <li className="sidebarListItem active">
                    <VideoLabel className="sidebarIcon" />
                    Azure Virtual Desktop
                </li>
            </Link>
            <Link to="/Collaboration" className="link">
                <li className="sidebarListItem active">
                    <Group className="sidebarIcon" />
                    Collaboration
                </li>
            </Link>
            <Link to="/END" className="link">
                <li className="sidebarListItem active">
                    <Sort className="sidebarIcon" />
                    Endpoint Management
                </li>
            </Link>
            <Link to="/" className="link">
                <li className="sidebarListItem active">
                    <Mail className="sidebarIcon" />
                        Messaging
                </li>
            </Link>

            
          </ul>
        </div>
      </div>
    </div>
  );
}
