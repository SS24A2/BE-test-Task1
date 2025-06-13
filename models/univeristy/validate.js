const { Validator } = require("node-input-validator");

const UniversityCreate = {
    name: "required|string|minLength:3",
    location: "required|string|minLength:3",
    faculties: "array",
};

const UniversityUpdate = {
    name: "string",
    location: "string",
    faculties: "array",
};

const validateUniversity = async (data, schema) => {
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
    UniversityCreate,
    UniversityUpdate,
    validateUniversity,
};