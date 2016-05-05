const log = require('npmlog');
const chalk = require('chalk');
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

const isValidPackageName = (name) => {
  return (!name.match(/^([a-zA-Z_$][a-zA-Z\d_$]*\.)+([a-zA-Z_$][a-zA-Z\d_$]*)$/))
    ? false
    : true;
}

module.exports = {
    log: log,
    chalk: chalk,
    isPlugin: isPlugin,
    isValidPackageName: isValidPackageName,
    fileExists: fileExists,
    getProjectPackageJson: getProjectPackageJson
}
