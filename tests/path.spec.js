const chai = require('chai');
const path = require('path');
const pathUtils = require('../src/path');

const expect = chai.expect;

describe('path', () => {

    describe('#isFile', () => {

        it('should return true for an existing file', () => {
            expect(pathUtils.isFile(path.join(__dirname, 'fixtures', 'file.txt'))).to.deep.equals(true);
        });

        it('should throw an error for a nonexistent file', () => {
            expect(() => {
                pathUtils.isFile(path.join(__dirname, 'fixtures', 'nofile.txt'))
            }).to.throw('ENOENT: no such file or directory');
        });

    });

    describe('#isDirectory', () => {

        it('should return true for an existing directory', () => {
            expect(pathUtils.isDirectory(path.join(__dirname, 'fixtures'))).to.deep.equals(true);
        });

        it('should throw an error for a nonexistent directory', () => {
            expect(() => {
                pathUtils.isDirectory(path.join(__dirname, 'nofixtures'))
            }).to.throw('ENOENT: no such file or directory');
        });

    });

    describe('#makeDirectory', () => {

        it('should create a directory if none exists');

        it('should not create a directory if one exists');

    });

    describe('#getProjectFolderName', () => {

        it('should get the project name');

    });

})

