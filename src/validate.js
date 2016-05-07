const isPackageName = (name) => {
    return !name.match(/^([a-zA-Z_$][a-zA-Z\d_$]*\.)+([a-zA-Z_$][a-zA-Z\d_$]*)$/)
    ? false
    : true;
};

const isPlugin = (dependency) => !!~dependency.indexOf('react-native-');

module.exports = {
    isPackageName: isPackageName,
    isPlugin: isPlugin,
};
