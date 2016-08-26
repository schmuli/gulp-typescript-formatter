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
            // see RootOptions interface for available options: https://github.com/vvakame/typescript-formatter/blob/master/lib/cli.ts#L25-L35
            baseDir: '.',
			tslint: true, // use tslint.json file?
			tsfmt: true, // use tsfmt.json file? Overrides settings in tslint.json (at least indentSize)
			editorconfig: true, // use .editorconfig file? Overrides tsfmt settings (at least indentSize)
        })
        .pipe(gulp.dest('.'));
}
```

