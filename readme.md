# gulp-start-process [![NPM version][npm-image]][npm-url]

> Spawn process with `stdio: "inherit"`

This is just shortcut to spawn processes in gulp.

## Usage

```js
var gulp = require('gulp');
var start = require('gulp-start-process');

gulp.task('default', function (cb) {
    start('cat gulpfile.js', cb);
});
```

Which will give you:

![screen shot 2014-11-24 at 2 52 01 pm](https://cloud.githubusercontent.com/assets/365089/5163125/7dae0950-73e9-11e4-82e6-625b7a629d48.png)

## License

MIT © [Vsevolod Strukchinsky](floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/gulp-start-process
[npm-image]: http://img.shields.io/npm/v/gulp-start-process.svg?style=flat
