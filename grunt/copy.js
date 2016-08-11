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
        cwd: '<%= paths.bower %>/bootstrap/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
    ],
    vendor: [
      {
        expand: true,
        cwd: '<%= paths.bower %>/',
        src: ['ckeditor/**/*'],
        dest: '<%= paths.dist %>/vendor/',
      },
    ],
  },

};
