const mongoose = require("mongoose");

const getConfigData = require("../config")

const URI = `mongodb+srv://${getConfigData("development").MDB_username}:${getConfigData("development").MDB_password}@cluster0.im0jw.mongodb.net/${getConfigData("development").DB_name}?retryWrites=true&w=majority&appName=Cluster0`

async function connectToDB() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to Mongo DB");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToDB;