'use strict';

const fs = require('fs');
const path = require('path');

const getProjectFolderName = (givenPath) => {
    return givenPath.split(path.sep).pop();
};

const isFile = (givenPath) => {
    return fs.statSync(givenPath).isFile();
};

const isDirectory = (givenPath) => {
    return fs.statSync(givenPath).isDirectory();
};

const makeDirectory = (givenPath) => {
    if (!fs.existsSync(givenPath)) {
        fs.mkdirSync(givenPath);
    }
};

module.exports = {
    isFile: isFile,
    isDirectory: isDirectory,
    makeDirectory: makeDirectory,
    getProjectFolderName: getProjectFolderName,
};
