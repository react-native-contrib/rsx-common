const spawn = require('child_process').spawn;

const run = (command, callback) => {
  return (callback) => {
    if (!callback) {
      throw new Error(`You missed a callback function for the ${command} command`);
    }

    const args = command.split(' ');
    const cmd  = args.shift();

    const commandProcess = spawn(cmd, args, {
      stdio: 'inherit',
      stdin: 'inherit',
    });

    commandProcess.on('close', function prelink(code) {
      if (code) {
        throw new Error(`Error occured while executing "${command}" command`);
      }

      callback();
    });
  };
};

module.exports = {
    run: run,
};
