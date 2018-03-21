'use strict';

module.exports = function (grunt) {

  var options = {

    // External configs
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    paths: {
      src: 'resources',
      dist: 'web',
      npm: 'node_modules',
      data: 'src/data',
      templates: 'src/templates',
      temp: '.tmp',
    },

    // Development
    devUrl: 'demo.bootstrap-ui.com.localhost',
  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { config: options });

  // See the `grunt/` directory for individual task configurations.
};
