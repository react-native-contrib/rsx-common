const isPackageName = (name) => {
    return !name.match(/^([a-zA-Z_$][a-zA-Z\d_$]*\.)+([a-zA-Z_$][a-zA-Z\d_$]*)$/)
    ? false
    : true;
};

const isPlugin = (dependency) => {
    return !!~dependency.indexOf('react-native-');
};

const inProject = () => {
    return process.cwd() === process.env.RN_PROJECT_ROOT;
};

module.exports = {
    inProject: inProject,
    isPackageName: isPackageName,
    isPlugin: isPlugin,
};
