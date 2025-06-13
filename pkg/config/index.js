const fs = require("fs");

let configObject = null

const CONFIG_SOURCE = `${__dirname}/../../config.json`

if (!configObject) {
    const config = fs.readFileSync(CONFIG_SOURCE, "utf-8");
    configObject = JSON.parse(config);
}

const getConfigData = (section) => {
    if (!configObject[section]) {
        throw `Configuration section ${section} does not exist!`
    }
    return configObject[section]
}

module.exports = getConfigData;
