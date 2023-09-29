import "./featureInfo.css";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Request for AVD VDI</h3>
        </div>
        <span className="featuredSub">Request for creation of a Pooled or Personal Azure VDI.</span>
        <div class="center">
          <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Request Access to Shared VDI</h3>
        </div>
        <span className="featuredSub">Request for access/ permissions to designated Shared VDI.</span>
        <div class="center">
        <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
        
      </div>
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Request Additional Resources</h3>
        </div>
        <span className="featuredSub">Request for additional resources for VDI such as CPU /RAM etc.</span>
        <div class="center">
        <Button className= "featuredButton">
          Submit Details
        </Button>
        </div>
        
      </div>
    </div>
  );
}
