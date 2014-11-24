var spawn = require('child_process').spawn;
var util = require('gulp-util');

module.exports = function start(cmd, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }

    opts.stdio = opts.stdio || 'inherit';

    util.log('$ ' + util.colors.magenta(cmd));

    return spawn('sh', ['-c', cmd], opts)
        .on('close', function (code) {
            if (code === 0) { return cb(); }

            cb(new util.PluginError(cmd, 'Process exited with code ' + code));
        })
        .on('error', function (err) {
            cb(new util.PluginError(cmd, err));
        });
};
