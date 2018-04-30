'use strict';

module.exports = {
  external: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/js/external/',
        src: ['*'],
        dest: '<%= paths.dist %>/js/external/',
      },
    ],
  },
  fonts: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
      {
        expand: true,
        cwd: '<%= paths.npm %>/bootstrap/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
    ],
  },
  vendor: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.npm %>/',
        src: ['ckeditor/**/*'],
        dest: '<%= paths.dist %>/vendor/',
      },
    ],
  },
};
