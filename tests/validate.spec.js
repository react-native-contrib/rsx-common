const chai = require('chai');
const path = require('path');
const validateUtils = require('../src/validate');

const expect = chai.expect;

describe('validate', () => {

    describe('#isPackageName', () => {

        it('should return true for a valid package name', () => {
            expect(validateUtils.isPackageName('com.rsx.app')).to.deep.equals(true);
        });

        it('should return false for an invalid package name');
    });

    describe('#isPlugin', () => {

        it('should return true for a valid React Native plugin', () => {
            expect(validateUtils.isPlugin('react-native-test')).to.deep.equals(true);
        });

        it('should return false for anything else', () => {
            expect(validateUtils.isPlugin('rxs-plugin-test')).to.deep.equals(false);
        });

    });

});
