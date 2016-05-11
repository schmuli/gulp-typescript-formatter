## gulp-typescript-formatter

Use the typescript-formatter to format TypeScript files in Gulp.

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

