'use strict';

let chai = require('chai');
let rewire = require('rewire');
let sinon = require('sinon');
let path = require('path');

let expect = chai.expect;

let pathUtils = require('../src/path');

describe('path', () => {

    describe('#isFile', () => {

        it('should return true for an existing file', () => {
            expect(pathUtils.isFile(path.join(__dirname, 'fixtures', 'file.txt'))).to.be.true;
        });

        it('should throw an error for a nonexistent file', () => {
            expect(() => {
                pathUtils.isFile(path.join(__dirname, 'fixtures', 'nofile.txt'));
            }).to.throw('ENOENT: no such file or directory');
        });

    });

    describe('#isDirectory', () => {

        it('should return true for an existing directory', () => {
            expect(pathUtils.isDirectory(path.join(__dirname, 'fixtures'))).to.be.true;
        });

        it('should throw an error for a nonexistent directory', () => {
            expect(() => {
                pathUtils.isDirectory(path.join(__dirname, 'nofixtures'));
            }).to.throw('ENOENT: no such file or directory');
        });

    });

    describe('#makeDirectory', () => {

        it('should create a directory if none exists', () => {
            let pathUtilsMock = rewire('../src/path');
            let stub = sinon.stub().returns(false);
            pathUtilsMock.__set__('fs', {
                existsSync: stub,
                mkdirSync: stub,
            });

            pathUtilsMock.makeDirectory(process.cwd());
            expect(stub.calledTwice).to.be.true;
        });

        it('should not create a directory if one exists', () => {
            let pathUtilsMock = rewire('../src/path');
            let stub = sinon.stub().returns(true);
            pathUtilsMock.__set__('fs', {
                existsSync: stub,
                mkdirSync: stub,
            });

            pathUtilsMock.makeDirectory(process.cwd());
            expect(stub.calledOnce).to.be.true;
        });

    });

});

