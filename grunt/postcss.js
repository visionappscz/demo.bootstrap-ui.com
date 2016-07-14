'use strict';

module.exports = {

  dist: {
    options: {
      processors: [
        require('pixrem')(),
        require('autoprefixer')({
          browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox ESR',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6',
          ],
        }),
      ],
    },
    src: '<%= paths.temp %>/main.css',
    dest: '<%= paths.dist %>/css/main.css',
  },
  'dist-min': {
    options: {
      processors: [
        require('cssnano')({
          autoprefixer: false,
          mergeRules: false,
          zindex: false,
        }),
      ],
    },
    src: '<%= paths.dist %>/css/main.css',
    dest: '<%= paths.dist %>/css/main.min.css',
  },

};
