import "./featureInfo.css";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Create Shared Mailbox</h3>
        </div>
        <span className="featuredSub">Raise a shared mailbox service request with the following detals - Mailbox name, mailbox alias, email id, users to be added, permissions for full access, send as, and Calendar Access. Ask for th details from the user.</span>
        <div class="center">
          <Button className= "featuredButton" component={Link} to="/dynamic1">
          Submit Details
        </Button>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Set MailBox Quota</h3>
        </div>
        <span className="featuredSub">Configure Storage Quota for Exchange Online mailbox as per User requirements or Organizational Policies</span>
        <div class="center">
        <Button className= "featuredButton" component={Link} to="/dynamic2">
          Submit Details
        </Button>
        </div>
        
      </div>
      <div className="featuredItem">
        <div className="featuredheading">
          <h3>Create Distribution List</h3>
        </div>
        <span className="featuredSub">A Distribution Group, or A distribution List, is a collection of two or more people that appear on your Organizational address book</span>
        <div class="center">
        <Button className= "featuredButton" component={Link} to="/dynamic3">
          Submit Details
        </Button>
        </div>
        
      </div>
    </div>
  );
}
