import { useState } from "react";
import api from "../services/api";

const SearchBar = ({ setReport, setError, setLoading }) => {
    const [url, setUrl] = useState("");

    const handleAnalyze = async () => {
        if (!url.trim()) {
            setError("Please enter a URL.");
            return;
        }

        try {
            setLoading(true);
            setError("");
            setReport(null);

            const response = await api.post("/audit", {
                url,
            });

            setReport(response.data);
        } catch (error) {
            setError(
                error.response?.data?.message || "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <button onClick={handleAnalyze}>
                Analyze
            </button>
        </div>
    );
};

export default SearchBar;