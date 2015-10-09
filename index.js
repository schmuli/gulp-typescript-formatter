"use strict";

var PluginError = require('gulp-util').PluginError;
var through = require('through');
var formatter = require('typescript-formatter');

function gulpTypescriptFormatter(options) {
  var formatOptions = options.configPath ? require(options.configPath) : {};

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(formatter.processString(file.path, String(file.contents), formatOptions));
    }

    if (file.isStream()) {
      return cb(new PluginError('gulp-typescript-formatter', 'Streaming not supported'));
    }

    cb(null, file);
  });

}

module.exports = gulpTypescriptFormatter;
