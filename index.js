const express = require("express")

const getConfigData = require("./pkg/config")
const connectToDB = require("./pkg/db")
connectToDB()

const { postHandler, getHandler, deleteHandler, getForm } = require("./handlers/faculties")

const app = express()

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.get("/universities/form", getForm)  //display form 
app.post("/universities/form", postHandler)  // submit form and redirect to LIST
app.get("/universities/list", getHandler) // display list
app.get("/universities/delete/:id", deleteHandler) //delete one and redirect to LIST

app.listen(getConfigData("development").port, () => console.log(`server started listening on port ${getConfigData("development").port}`))
