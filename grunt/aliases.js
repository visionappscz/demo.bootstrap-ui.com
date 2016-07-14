'use strict';

module.exports = {

  'build-css': [
    'less',
    'postcss',
  ],

  'build-js': [
    'concat',
    'uglify',
  ],

  'build-images': [
    'svgmin',
    'imagemin',
  ],

  build: [
    'clean',
    'build-css',
    'build-js',
    'build-images',
    'copy',
  ],

  dev: [
    'build',
    'browserSync',
    'watch',
  ],

  default: [
    'build',
  ],

};
