const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Page Pulse API is running"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});