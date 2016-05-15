'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Checks if `file` exists and returns `true`, `false` otherwise.
 *
 * @param  {String} file Path of the file
 *
 * @return {Boolean}
 */
const isFile = (file) => {
    return fs.statSync(file).isFile();
};

/**
 * Checks if `directory` exists and returns `true`, `false` otherwise.
 *
 * @param  {String} directory
 *
 * @return {Boolean}
 */
const isDirectory = (directory) => {
    return fs.statSync(directory).isDirectory();
};

/**
 * Creates a directory at `directory` if it doesn't already exist
 *
 * @param  {String} directory
 *
 * @return {Void}
 */
const makeDirectory = (directory) => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
};

module.exports = {
    isFile: isFile,
    isDirectory: isDirectory,
    makeDirectory: makeDirectory,
};
