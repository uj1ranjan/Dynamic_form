import AVDFeaturedInfo from "../../components/featureinfo/AVDFeatureinfo";
import JsonTable from "../../components/jsonTable/AVDjsonTable";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
        <div className = 'heading'>
            <h4>Azure Virtual Desktop</h4>
        </div>
      <JsonTable />
    </div>
  );
}