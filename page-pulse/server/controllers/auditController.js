const axios = require("axios");
const cheerio = require("cheerio");

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

        // Validate URL format
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
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $('title').text();
        const headingCount = $('h1, h2, h3, h4, h5, h6').length;
        const paraCount = $('p').length;
        const linkCount = $('a').length;
        const imageCount = $('img').length;

        // Metadta title length
        const metaTitle = $('meta[name="title"]').attr('content') || $('title').text();

        // Meta description length
        const metaDescription = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content');
        // Return basic audit data
        return res.status(200).json({
            success: true,
            status: response.status,
            responseTime: `${responseTime} ms`,
            title,
            headingCount,
            paraCount,
            linkCount,
            imageCount
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = {
    auditWebsite
};