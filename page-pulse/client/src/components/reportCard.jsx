const ReportCard = ({ report }) => {
    return (
        <div className="report-card">
            <h2>Audit Report</h2>

            <p><strong>✅ Status:</strong> {report.status}</p>
            <p><strong>⚡ Response Time:</strong> {report.responseTime}</p>
            <p><strong>📄 Title:</strong> {report.title}</p>
            <p><strong>📝 Meta Description:</strong> {report.metaDescription}</p>
            <p><strong>📌 H1 Count:</strong> {report.h1Count}</p>
            <p><strong>🖼 Missing Alt Images:</strong> {report.missingAltImages}</p>
            <p><strong>📖 Word Count:</strong> {report.wordCount}</p>
        </div>
    );
};

export default ReportCard;