import ENDFeaturedInfo from "../../components/featureinfo/ENDFeatureinfo";
import JsonTable from "../../components/jsonTable/ENDjsonTable";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className = 'heading'>
            <h4>Endpoint Management</h4>
        </div>
      <JsonTable />
    </div>
  );
}