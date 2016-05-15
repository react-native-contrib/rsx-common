'use strict';

const chai = require('chai');
const sinon = require('sinon');
const rewire = require('rewire');
const path = require('path');

const expect = chai.expect;
let spawnError = false;
let processUtilsMock = rewire('../src/process');
processUtilsMock.__set__('spawn', () => {
    return {
        on: (ev, cb) => cb(spawnError),
    };
});

describe('process', () => {

    describe('#run', () => {
        const command = processUtilsMock.run('echo');

        it('should generate a function around shell command', () => {
            expect(typeof command).to.deep.equals('function');
        });

        it('should throw an error if no callback was provided', () => {
            expect(() => command()).to.throw('You missed a callback function');
        });

        it('should invoke a callback after command execution', () => {
            const spy = sinon.spy();
            command(spy);
            expect(spy.callCount).to.equals(1);
        });

        it('should throw an error if process exited with a code');
        // it('should throw an error if process exited with a code', () => {
        //     const errorCommand = processUtils.run('sleep 10');
        //     const spy = sinon.spy();
        //     expect(() => errorCommand(spy)).to.throw('Error occurred while executing');
        // });

        it('should throw an error if spawn ended up with error', () => {
            spawnError = true;
            const spy = sinon.spy();
            expect(() => command(spy)).to.throw();
        });
    });

});
