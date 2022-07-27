const express = require("express");
const mongoose = require("mongoose");

const connectDb = async () => {
    const DB_URL = "mongodb+srv://kien:1234@mern-learnit.royiv.mongodb.net/mern-learnit?retryWrites=true&w=majority"
    try {
        const db = await mongoose.connect(DB_URL, {});

        console.log("Connected to Mongoose database");
        // const db = await mongoose.connect(process.env.DB_URL);
        // return db;
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDb();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

const PORT = 5000; // port number

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});