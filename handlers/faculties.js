const fs = require("fs")

const { createInDB, getAllFromDB, deleteInDB } = require("../models/faculty/index")
const { FacultyCreate, validateFaculty, } = require("../models/faculty/validate")

async function getForm(req, res) {
    try {
        const data = { message: "", rule: "" }
        res.render("form", { data });;
    } catch (error) {
        console.error(error)
        const data = { text: "Internal Server Error", code: 500, message: "The server encountered an error and could not complete your request" }
        res.render("error", { data });
    }
}

const postHandler = async (req, res) => {
    try {
        await validateFaculty(req.body, FacultyCreate)
        await createInDB(req.body)
        res.redirect("/universities/list")
    } catch (err) {
        console.error(err);
        if (err.code === 422) {
            const prop = Object.keys(err.error)[0]
            const data = { message: err.error[prop].message, rule: err.error[prop].rule }
            res.render("form", { data });;
        } else {
            const data = { text: "Internal Server Error", code: 500, message: "The server encountered an error and could not complete your request" }
            res.render("error", { data });
        }
    }
}

const getHandler = async (req, res) => {
    try {
        const data = await getAllFromDB()
        res.render("index", { data });
    } catch (err) {
        console.error(err);
        const data = { text: "Internal Server Error", code: 500, message: "The server encountered an error and could not complete your request" }
        res.render("error", { data });
    }
}

const deleteHandler = async (req, res) => {
    try {
        await deleteInDB(req.params.id)
        res.redirect("/universities/list")
    } catch (err) {
        console.error(err);
        const data = { text: "Internal Server Error", code: 500, message: "The server encountered an error and could not complete your request" }
        res.render("error", { data });
    }
}


module.exports = { postHandler, getHandler, deleteHandler, getForm }