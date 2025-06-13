const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: String,
    faculties: Array,
}, { timestamps: true });

const universityModel = mongoose.model("University", universitySchema);

const createInDB = async (data) => {
    try {
        return await universityModel.insertOne(data)
    } catch (err) {
        console.error(err)
    }
}

const getAllFromDB = async () => {
    try {
        return await universityModel.find()
    } catch (err) {
        console.error(err)
    }
}

const getOneFromDB = async (filterObject) => {
    try {
        return await universityModel.findOne(filterObject)
    } catch (err) {
        console.error(err)
    }
}

const getOneByIdFromDB = async (id) => {
    try {
        return await universityModel.findById(id)
    } catch (err) {
        console.error(err)
    }
}

const updateInDB = async (id, data) => {
    try {
        return await universityModel.updateOne({ _id: id }, data)
    } catch (err) {
        console.error(err)
    }
}

const deleteInDB = async (id) => {
    try {
        return await universityModel.deleteOne({ _id: id })
    } catch (err) {
        console.error(err)
    }
}

module.exports = { createInDB, getAllFromDB, getOneFromDB, getOneByIdFromDB, updateInDB, deleteInDB }






