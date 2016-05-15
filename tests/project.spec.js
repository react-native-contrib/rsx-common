'use strict';

const chai = require('chai');
const sinon = require('sinon');
const log = require('npmlog');
const path = require('path');

const expect = chai.expect;
log.level = 'silent';

const projectUtils = require('../src/project');

describe('project', () => {

    describe('#getPackageJson', () => {

        it('should return the package file as a JSON object', () => {
            let projectPath = path.join(__dirname, 'fixtures', 'react-native-project');
            expect(projectUtils.getPackageJson(projectPath).name).to.deep.equals('VideoApp');
        });

        it('should return an empty array if no package file exists', () => {
            let nonprojectPath = path.join(__dirname, 'fixtures');
            expect(projectUtils.getPackageJson(nonprojectPath)).to.deep.equals([]);
        });

    });

});
