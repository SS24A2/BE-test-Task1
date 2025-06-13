const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: String,
    university: String
}, { timestamps: true });

const facultyModel = mongoose.model("Faculty", facultySchema);

const createInDB = async (data) => {
    try {
        return await facultyModel.insertOne(data)
    } catch (err) {
        console.error(err)
    }
}

const getAllFromDB = async () => {
    try {
        return await facultyModel.find()
    } catch (err) {
        console.error(err)
    }
}

const getOneFromDB = async (filterObject) => {
    try {
        return await facultyModel.findOne(filterObject)
    } catch (err) {
        console.error(err)
    }
}

const getOneByIdFromDB = async (id) => {
    try {
        return await facultyModel.findById(id)
    } catch (err) {
        console.error(err)
    }
}

const updateInDB = async (id, data) => {
    try {
        return await facultyModel.updateOne({ _id: id }, data)
    } catch (err) {
        console.error(err)
    }
}

const deleteInDB = async (id) => {
    try {
        return await facultyModel.deleteOne({ _id: id })
    } catch (err) {
        console.error(err)
    }
}

module.exports = { createInDB, getAllFromDB, getOneFromDB, getOneByIdFromDB, updateInDB, deleteInDB }






