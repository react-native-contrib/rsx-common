'use strict';

let path = require('path');
let log = require('npmlog');

/**
 * Retrieve the `package.json` file from the path provided by `folder`.
 *
 * @param  {String} folder
 *
 * @return {Object}
 */
const getPackageJson = (folder) => {
    let pkg = {};
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
