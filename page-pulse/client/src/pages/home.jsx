import { useState } from "react";
import SearchBar from "../components/searchBar.jsx";
import ReportCard from "../components/reportCard.jsx";
const Home = () => {
    const [report, setReport] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="container">
            <h1>Page Pulse</h1>
            <p>Analyze any website instantly.</p>

            <SearchBar
                setReport={setReport}
                setError={setError}
                setLoading={setLoading}
            />

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {report && <ReportCard report={report} />}
        </div>
    );
};

export default Home;