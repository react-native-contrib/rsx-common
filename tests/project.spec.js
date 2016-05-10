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
            expect(projectUtils.getPackageJson(process.cwd()).name).to.deep.equals('rsx-common');
        });

        it('should return an empty array if no package file exists', () => {
            expect(projectUtils.getPackageJson(path.join(process.cwd(), '..'))).to.deep.equals([]);
        });

    });

});
