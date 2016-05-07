const path = require('path');
const log = require('npmlog');

const getPackageJson = (folder) => {
    try {
        const pkg = require(path.join(folder, 'package.json'));
    } catch (e) {
        log.error(e);
        return [];
    }

    return pkg;
};

module.exports = {
    getPackageJson: getPackageJson,
};
