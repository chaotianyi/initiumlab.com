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
            src: [
            'thumbnail.png',
            'meta.json'
            ],
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
      hexo_generate: 'hexo generate -f',
      hexo_deploy: 'hexo generate -d',
      copy_tags: 'cp -r public/tags public/blog/tags' // Not used at the moment; could be useful in the future
    },

    relativeRoot: {
      all: {
        options: {
          root: 'public'
        },
        files: [{
          expand: true,
          cwd: 'public',
          src: ['**/*.css', '**/*.html'],
          dest: 'public/'
        }]
      }
    },

    rsync: {
      options: {
        args: ["--verbose"],
        exclude: [".git*","*.scss","node_modules"],
        recursive: true
      },
      showcase: {
        options: {
          src: "./public/",
          dest: "/home/vagrant/web/initiumlab.com/",
          host: "showcase",
          delete: true // Careful this option could cause data loss, read the docs!
        }
      }
    },

    shell: {
      scanAlt: {
          command: 'find public -name "*.html" | xargs -I{} bash -c "cat {} | pquery img -f \'{}\t{src}\t{alt}\'"'
      }
    },

    execute: {
      scanSummaryTag: {
        src: ['utils/scanMore.js']
      },

      newShowcase: {
        options: {
          args: [process.argv[2]]
        },
        src: ['utils/newShowcase.js']
      }
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
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-relative-root');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-shell');


  grunt.registerTask('build',  ['exec:hexo_clean', 'exec:hexo_generate','copy', 'relativeRoot']);
  grunt.registerTask('build:quick',  ['exec:hexo_generate','copy']);
  grunt.registerTask('build:complete',  ['build']); // Just an alias for "build", reserved for developers' habits
  grunt.registerTask('serve',  ['build:quick', 'connect', 'watch']);
  grunt.registerTask('deploy:prod', ['gh-pages']);
  grunt.registerTask('deploy:staging', ['rsync']);
  grunt.registerTask('scan:alt', ['shell:scanAlt']);
  grunt.registerTask('scan:summaryTag', ['execute:scanSummaryTag']);

  grunt.registerTask('new', function (type) {
    if (type === 'post') {
      grunt.task.run('execute:newPost')
    } else if (type === 'showcase') {
      grunt.task.run('execute:newShowcase')
    }
  })
};
