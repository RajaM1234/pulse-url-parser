const express = require("express");
const cors = require("cors");
require("dotenv").config();
const auditRoutes = require("./routes/auditRoutes");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Page Pulse API is running"
    });
});
app.use("/api", auditRoutes);
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});