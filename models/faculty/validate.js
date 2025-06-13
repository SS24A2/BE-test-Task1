const { Validator } = require("node-input-validator");

const FacultyCreate = {
    name: "required|string",
    location: "required|string",
    university: "required|string",
};

const FacultyUpdate = {
    name: "string",
    location: "string",
};

const validateFaculty = async (data, schema) => {
    const validator = new Validator(data, schema);
    const result = await validator.check();

    if (!result) {
        throw {
            code: 422,
            error: validator.errors,
        };
    }
};

module.exports = {
    FacultyCreate,
    FacultyUpdate,
    validateFaculty,
};