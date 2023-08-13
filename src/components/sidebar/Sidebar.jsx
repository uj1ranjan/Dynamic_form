import "./sidebar.css";
import {
  LineStyle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">DW M365 Request Catalog</h2>
          <ul className="sidebarList">
            <Link to="/" className="link">
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                        Messaging and Collaboration
                </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
