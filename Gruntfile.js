'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['public'],

    watch: {
      app: {
        files: ['source/**/*', 'themes/**/*'],
        options: {
          livereload: true
        },
        tasks: ["build"]
      }
    },

    connect: {
      dist: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          base: 'public/'
        }
      }
    },

    copy: {
      dist: {expand: true,
            flatten: false,
            cwd: 'static',
            src: ['**'],
            dest: 'public/blog/',
            filter: 'isFile'}
    },

    'gh-pages': {
      options: {
        base: 'public',
        branch: 'gh-pages'
        // by default use the method (HTTPS/ SSH) when you clone
        //repo: 'https://github.com/initiumlab/initiumlab.com.git'
      },
      src: '**/*'
    },

    'exec': {
      hexo_clean: 'hexo clean',
      hexo_generate: 'hexo generate'
    }


  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-targethtml');

  grunt.registerTask('build',  ['exec:hexo_generate','copy']);
  grunt.registerTask('build:complete',  ['clean', 'exec:hexo_clean', 'exec:hexo_generate','copy']);
  grunt.registerTask('serve',  ['build', 'connect', 'watch']);
  grunt.registerTask('deploy', ['build:complete', 'gh-pages']);
};
