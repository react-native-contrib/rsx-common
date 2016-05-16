'use strict';

/**
 * If `name` is a valid package name, returns `true`, otherwise `false`.
 *
 * @param  {String} name
 *
 * @return {Boolean}
 */
const isPackageName = (name) => {
    return !name.match(/^([a-zA-Z_$][a-zA-Z\d_$]*\.)+([a-zA-Z_$][a-zA-Z\d_$]*)$/)
    ? false
    : true;
};

/**
 * If `dependency` is a valid React Native dependency, returns `true`, otherwise `false`.
 *
 * @param  {String} dependency
 *
 * @return {Boolean}
 */
const isPlugin = (dependency) => {
    return !!~dependency.indexOf('react-native-');
};

/**
 * If `RN_PROJECT_ROOT`
 *
 * @param  {String} folder
 *
 * @return {Boolean}
 */
const isProject = () => {
    const pkg = require('./project').getPackageJson(process.env.RN_PROJECT_ROOT);
    let result = false;

    if (Object.keys(pkg).length === 0) {
        return result;
    }

    ['react', 'react-native'].forEach((dependency) => {
        result = Object.keys(pkg.dependencies).indexOf(dependency) > -1;
    });

    return result;
};

/**
 * If the current working directory matches the `RN_PROJECT_ROOT` environment
 * variable, then returns `true`, otherwise `false`.
 *
 * @return {Boolean}
 */
const inProject = () => {
    return process.cwd() === process.env.RN_PROJECT_ROOT;
};

module.exports = {
    inProject: inProject,
    isPackageName: isPackageName,
    isPlugin: isPlugin,
    isProject: isProject,
};
