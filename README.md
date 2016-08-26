## gulp-typescript-formatter

[Gulp](http://gulpjs.com/) wrapper/plugin for [typescript-formatter](https://www.npmjs.com/package/typescript-formatter) to format TypeScript files with Gulp.

### Installation

```
npm install --save-dev gulp-typescript-formatter
```

### Usage

```
var typescriptFormatter = require('gulp-typescript-formatter');

gulp.task('format', function () {
    return gulp.src('**/*.ts')
        .pipe(typescriptFormatter({
            baseDir: '.',
            tsfmt: true
        })
        .pipe(gulp.dest('.'));
}
```

