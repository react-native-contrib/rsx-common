const getPackageJson = (folder) => {
    try {
        const pkg = require(path.join(folder, 'package.json'));
    } catch (e) {
        console.error(e);
        return [];
    }

    return pkg;
};

module.exports = {
    getPackageJson: getPackageJson,
};
