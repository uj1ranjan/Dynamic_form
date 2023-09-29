//import FeaturedInfo from "../../components/featureinfo/FeatureInfo";
import JsonTable from "../../components/jsonTable/JsonTable";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className = 'heading'>
            <h4>Messaging Service Request</h4>
        </div>
      <JsonTable />
    </div>
  );
}
