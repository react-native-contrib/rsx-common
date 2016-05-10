const chai = require('chai');
const mock = require('mock-require');
const sinon = require('sinon');
const log = require('npmlog');
const path = require('path');
const projectUtils = require('../src/project');

const expect = chai.expect;

log.level = 'silent';

describe('project', () => {

    describe('#getPackageJson', () => {

        afterEach(() => {
            mock.stopAll();
        });

        it('should return the package file as a JSON object', () => {
            mock(path.join(process.cwd(), 'package.json'), {
                name: 'Test Package'
            });

            expect(projectUtils.getPackageJson(process.cwd()).name).to.deep.equals('Test Package');
        });

        it('should return an empty array if no package file exists', () => {
            expect(projectUtils.getPackageJson(path.join(process.cwd(), '..'))).to.deep.equals([]);
        });

    });

});
