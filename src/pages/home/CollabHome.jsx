import CollabFeaturedInfo from "../../components/featureinfo/CollabFeatureInfo";
import JsonTable from "../../components/jsonTable/CollabjsonTable";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className = 'heading'>
            <h4>Collaboration</h4>
        </div>
      <JsonTable />
    </div>
  );
}