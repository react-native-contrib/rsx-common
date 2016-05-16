'use strict';

let chai = require('chai');
let sinon = require('sinon');
let rewire = require('rewire');
let path = require('path');

let expect = chai.expect;
let spawnError = false;
let processUtilsMock = rewire('../src/process');
processUtilsMock.__set__('spawn', () => {
    return {
        on: (ev, cb) => cb(spawnError),
    };
});

describe('process', () => {

    describe('#run', () => {
        let command = processUtilsMock.run('echo');

        it('should generate a function around shell command', () => {
            expect(command).to.be.a('function');
        });

        it('should throw an error if no callback was provided', () => {
            expect(() => command()).to.throw('You missed a callback function');
        });

        it('should invoke a callback after command execution', () => {
            let spy = sinon.spy();
            command(spy);
            expect(spy.calledOnce).to.be.true;
        });

        // it('should throw an error if process exited with a code');
        // it('should throw an error if process exited with a code', () => {
        //     let errorCommand = processUtilsMock.run('sleep 10');
        //     let spy = sinon.spy();
        //     expect(() => errorCommand(spy)).to.throw('Error occurred while executing');
        // });

        it('should throw an error if spawn ended up with error', () => {
            spawnError = true;
            let spy = sinon.spy();
            expect(() => command(spy)).to.throw();
        });
    });

});
