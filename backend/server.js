const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3000;

const mongoUrl = "mongodb://database:27017";

app.get("/", (req, res) => {
    res.json({
        message: "Backend container is running successfully!"
    });
});

app.get("/api", async (req, res) => {
    try {
        const client = new MongoClient(mongoUrl);

        await client.connect();

        const db = client.db("dockerapp");

        await db.collection("messages").insertOne({
            message: "Frontend successfully communicated with Backend and Database",
            timestamp: new Date()
        });

        await client.close();

        res.json({
            message: "Frontend → Backend → MongoDB communication successful!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});

