'use strict';

const path = require('path');
const log = require('npmlog');

const getPackageJson = (folder) => {
    let pkg = [];
    try {
        pkg = require(path.join(folder, 'package.json'));
    } catch (e) {
        log.error(e);
    }

    return pkg;
};

module.exports = {
    getPackageJson: getPackageJson,
};
