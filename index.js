const log = require('npmlog');
const path = require('path');
const fs = require('fs');

const fileExists = (file) => {
    fs.accessSync(file, fs.F_OK);
}

const getProjectPackageJson = (folder) => {

    try {
        const file = path.join(folder, 'package.json');
        fileExists(file);
        const pjson = require(file);
    } catch (e) {
        console.error(e);
        return [];
    }

    return pjson;
}

const isPlugin = (dependency) => !!~dependency.indexOf('react-native-');

module.exports = {
    log: log,
    isPlugin: isPlugin,
    fileExists: fileExists,
    getProjectPackageJson: getProjectPackageJson
}
