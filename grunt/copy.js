'use strict';

module.exports = {

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
