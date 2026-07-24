const cheerio = require("cheerio");

const analyzePage = (html) => {
    const $ = cheerio.load(html);

    const title = $("title").text().trim();

    const metaDescription =
        $('meta[name="description"]').attr("content") ||
        "No meta description found";

    const h1Count = $("h1").length;

    const missingAltImages = $("img")
        .filter((i, img) => !$(img).attr("alt"))
        .length;

    const text = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim();

    const wordCount = text ? text.split(" ").length : 0;

    return {
        title,
        metaDescription,
        h1Count,
        missingAltImages,
        wordCount,
    };
};

module.exports = analyzePage;