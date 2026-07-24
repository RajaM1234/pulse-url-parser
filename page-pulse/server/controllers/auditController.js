const axios = require("axios");
const analyzePage = require("../utils/pageAnalyzer");

const auditWebsite = async (req, res) => {
    try {
        const { url } = req.body;

        // Check if URL is provided
        if (!url) {
            return res.status(400).json({
                success: false,
                message: "URL is required."
            });
        }

        // Validate URL
        try {
            new URL(url);
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: "Invalid URL format."
            });
        }

        // Start timer
        const startTime = Date.now();

        // Fetch website
        const response = await axios.get(url, {
            timeout: 10000,
            validateStatus: () => true
        });

        // Stop timer
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        // Check if response is HTML
        const contentType = response.headers["content-type"];

        if (!contentType || !contentType.includes("text/html")) {
            return res.status(400).json({
                success: false,
                message: "URL does not contain an HTML page."
            });
        }

        // Analyze HTML
        const report = analyzePage(response.data);

        // Return report
        return res.status(200).json({
            success: true,
            status: response.status,
            responseTime: `${responseTime} ms`,
            ...report
        });

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            return res.status(408).json({
                success: false,
                message: "Request timed out."
            });
        }

        if (error.code === "ENOTFOUND") {
            return res.status(404).json({
                success: false,
                message: "Website not found."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Something went wrong.",
            error: error.message
        });
    }
};

module.exports = {
    auditWebsite
};