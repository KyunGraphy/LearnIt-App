require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth")

const connectDb = async () => {
    const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.royiv.mongodb.net/mern-learnit?retryWrites=true&w=majority`
    try {
        await mongoose.connect(DB_URL, {});
        // const db = await mongoose.connect(DB_URL, {});

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
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.use("/api/auth", authRouter);

const PORT = 5000; // port number

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});