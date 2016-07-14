'use strict';

module.exports = {

  dist: {
    src: [
      '<%= paths.bower %>/jquery/dist/jquery.js',
      '<%= paths.bower %>/moment/min/moment-with-locales.js',
      '<%= paths.bower %>/bootstrap/dist/js/bootstrap.js',
      '<%= paths.bower %>/fancybox/source/jquery.fancybox.js',
      '<%= paths.bower %>/select2/select2.js',
      '<%= paths.bower %>/select2/select2_locale_cs.js',
      '<%= paths.bower %>/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      '<%= paths.bower %>/bootstrap.ui/dist/js/bootstrap-ui.js',
      '<%= paths.bower %>/picturefill/dist/picturefill.js',
      '<%= paths.src %>/js/main.js',
    ],
    dest: '<%= paths.temp %>/main.js',
  },

};
