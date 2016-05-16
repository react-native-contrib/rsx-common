'use strict';

let chai = require('chai');
let sinon = require('sinon');
let log = require('npmlog');
let path = require('path');

let expect = chai.expect;
log.level = 'silent';

let projectUtils = require('../src/project');

describe('project', () => {

    describe('#getPackageJson', () => {

        it('should return the package file as a JSON object', () => {
            let projectPath = path.join(__dirname, 'fixtures', 'react-native-project');
            expect(projectUtils.getPackageJson(projectPath).name).to.eql('VideoApp');
        });

        it('should return an empty array if no package file exists', () => {
            let nonprojectPath = path.join(__dirname, 'fixtures');
            expect(projectUtils.getPackageJson(nonprojectPath)).to.be.empty;
        });

    });

});
