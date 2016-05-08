const chai = require('chai');
const path = require('path');
const validateUtils = require('../src/validate');

const expect = chai.expect;

describe('validate', () => {

    describe('#isPackageName', () => {
        it('should return true for a valid package name');
        it('should return false for an invalid package name');
    });

    describe('#isPlugin', () => {
        it('should return true for a valid RSX plugin');
        it('should return false for an invalid RSX plugin');
    });

});
