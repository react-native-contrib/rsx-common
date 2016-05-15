'use strict';

const isPackageName = (name) => {
    return !name.match(/^([a-zA-Z_$][a-zA-Z\d_$]*\.)+([a-zA-Z_$][a-zA-Z\d_$]*)$/)
    ? false
    : true;
};

const isPlugin = (dependency) => {
    return !!~dependency.indexOf('react-native-');
};

const isProject = () => {
    const pkg = require('./project').getPackageJson(process.env.RN_PROJECT_ROOT);
    var result = false;

    if (Object.keys(pkg).length === 0) {
        return result;
    }

    ['react', 'react-native'].forEach((dependency) => {
        result = Object.keys(pkg.dependencies).indexOf(dependency) > -1;
    });

    return result;
};

const inProject = () => {
    return process.cwd() === process.env.RN_PROJECT_ROOT;
};

const isIn = (haystack, needle, type) => {
    if (Object.keys(haystack).indexOf(needle) === -1) {
        throw Error(`${needle} is not a valid ${type} for this command`);
    }
    return true;
};

module.exports = {
    isIn: isIn,
    inProject: inProject,
    isPackageName: isPackageName,
    isPlugin: isPlugin,
    isProject: isProject,
};
