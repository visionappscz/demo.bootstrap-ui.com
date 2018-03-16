'use strict';

module.exports = {

  dist: {
    options: {
      paths: '<%= paths.npm %>',
    },
    files: {
      '<%= paths.temp %>/main.css': '<%= paths.src %>/less/main.less',
    },
  },

};
