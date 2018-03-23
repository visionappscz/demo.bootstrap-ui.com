'use strict';

module.exports = {

  dist: {
    src: [
      '<%= paths.npm %>/jquery/dist/jquery.js',
      '<%= paths.npm %>/moment/min/moment-with-locales.js',
      '<%= paths.npm %>/bootstrap/dist/js/bootstrap.js',
      '<%= paths.npm %>/fancybox/source/jquery.fancybox.js',
      '<%= paths.npm %>/select2/select2.js',
      '<%= paths.npm %>/select2/select2_locale_cs.js',
      '<%= paths.npm %>/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      '<%= paths.npm %>/bootstrap-ui/dist/js/bootstrap-ui.js',
      '<%= paths.npm %>/picturefill/dist/picturefill.js',
      '<%= paths.src %>/js/main.js',
    ],
    dest: '<%= paths.temp %>/main.js',
  },

};
