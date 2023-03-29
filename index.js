const router = require("./router");
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);


const Job = require('./Model/rdp_model')

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

async function getItems() {
    const Items = await Job.find({});
    return Items;
}

app.get("/joblist", function (req, res) {
    getItems().then(function (FoundItems) {
        console.log(FoundItems);
        res.send(FoundItems)
    })
});