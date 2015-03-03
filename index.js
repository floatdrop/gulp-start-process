var spawn = require('child_process').spawn;
var util = require('gulp-util');
var path = require('path');

module.exports = function start(cmd, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }

    opts.stdio = opts.stdio || 'inherit';

    var prefix = '';

    if (opts.cwd) {
        prefix = util.colors.gray(path.relative(process.cwd(), opts.cwd)) + ' ';
    }

    util.log(prefix + '$ ' + util.colors.magenta(cmd));

    var shell = /^win/.test(process.platform) ? {
        cmd: 'cmd.exe',
        option: '/C'
    } : {
        cmd: 'sh',
        option: '-c'
    };

    return spawn(shell.cmd, [shell.option, cmd], opts)
        .on('close', function (code) {
            if (code === 0) { return cb(); }

            cb(new util.PluginError(cmd, 'Process exited with code ' + code));
        })
        .on('error', function (err) {
            cb(new util.PluginError(cmd, err));
        });
};
