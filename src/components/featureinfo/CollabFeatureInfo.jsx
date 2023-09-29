import "./featureInfo.css";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Access Management</h3>
        </div>
        <span className="featuredSub">To configure a Dedicated host pool to DIrectly assign users to VMs ( This will give one to one mapping of users to dedicated VDI in a hostpool).</span>
        <div class="center">
          <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Infrastructure Management</h3>
        </div>
        <span className="featuredSub">Request for Disk Cleanup of AVD Pooled / Personal Desktops.</span>
        <div class="center">
        <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>

        </div>
        <div className="featuredItem">
        <div className="featuredheading">
          <h3>Session Logoff</h3>
        </div>
        <span className="featuredSub">Reset VM Users with either login issue or facing unresponsive VM sessions</span>
        <div class="center">
        <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
        
      </div>
    </div>
  );
}
