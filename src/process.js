'use strict';

let spawn = require('child_process').spawn;

/**
 * Runs `command` as a shell process. Optionally, options can be passed to the
 * underlying `child_process.spawn()` command via `sArgs`.
 *
 * @param  {String} command
 * @param  {Object} sArgs
 *
 * @return {Void}
 */
const run = (command, sArgs) => {
    const spawnArgs = sArgs || {stdio: 'inherit', stdin: 'inherit'};

    return (callback) => {
        if (!callback) {
            throw new Error(`You missed a callback function for the ${command} command`);
        }

        const args = command.split(' ');
        const cmd  = args.shift();

        const commandProcess = spawn(cmd, args, spawnArgs);

        commandProcess.on('close', function prelink(code) {
            if (code) {
                throw new Error(`Error occurred while executing "${command}" command`);
            }

            callback();
        });
    };
};

module.exports = {
    run: run,
};
