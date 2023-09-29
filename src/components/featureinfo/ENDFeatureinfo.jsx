import "./featureInfo.css";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Configuration</h3>
        </div>
        <span className="featuredSub">Request to add/delete device entries from Azure AD (Azure join services).</span>
        <div class="center">
          <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Intune</h3>
        </div>
        <span className="featuredSub">Request to provide hardware and software inventory for Intune managed devices.</span>
        <div class="center">
        <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
        
      </div>
    </div>
  );
}
