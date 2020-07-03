module.exports.exec = function (command, {capture = false, echo = false} = {}) {
  if (echo) {
    console.log(command);
  }

  const spawn = require('child_process').spawn;
  const childProcess = spawn('bash', ['-c', command], {stdio: capture ? 'pipe' : 'inherit'});

  return new Promise((resolve, reject) => {
    let stdout = '';

    if (capture) {
      childProcess.stdout.on('data', (data) => {
        stdout += data;
      });
    }

    childProcess.on('error', function (error) {
      reject({code: 1, error: error});
    });

    childProcess.on('close', function (code) {
      if (code > 0) {
        reject({code: code, error: 'Command failed with code ' + code});
      } else {
        resolve({code: code, data: stdout});
      }
    });
  });
};
