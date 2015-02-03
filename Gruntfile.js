module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          keepalive: false,
          livereload: 35729,
          open: true
        }        
    }    
  },
    sass: {
      dist: {
        options: {
          loadPath: 'sass/',
          update: true
        },
        files: [
          {
            expand: true,
            src: ['components/*/*.scss'],
            dest: 'css/',
            ext: '.css'
          },
          {
            src: 'sass/base.scss',
            dest: 'css/base.css'
          },
          {
            src: 'sass/layouts/library.scss',
            dest: 'css/layouts/library.css'
          },
          {
            src: 'sass/layouts/vertical.scss',
            dest: 'css/layouts/vertical.css'
          }
        ]
      }
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'components/*/*.js'
        ],
        dest: 'js/ncarb-design-library-<%= pkg.version %>.min.js'
      },
    },
    cssmin: {
      minify: {
        src: [
          'css/base.css',
          'css/components/*/*.css'
        ],
        dest: 'css/ncarb-design-library-<%= pkg.version %>.min.css'
      },
      base: {
        // TODO: move bootstrap components to components
        // by creating a seperate components css
        // to include with all these component files
        src: [
          'css/base.css',
        ],
        dest: 'css/ncarb-design-base-<%= pkg.version %>.min.css'
      },
      components: {
        src: [
          'css/components/*/*.css'
        ],
        dest: 'css/ncarb-design-components-<%= pkg.version %>.min.css'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: false,
        globals: {
          jQuery: true
        }
      },
      all: [
        'Gruntfile.js',
        'components/*/*.js'
      ],
      gruntfile: 'Gruntfile.js'
    },
    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      scripts: {
        files: [
          'js/*.js',
          'components/*/*.js'
        ],
        tasks: ['jshint'],
        options: {
          debounceDelay: 250
        }
      },
      base_files: {
        files: [
          'index.html'
        ],
        tasks: ['sass']
      },
      base_styles: {
        files: [
          'sass/base.scss',
          'sass/**/*.scss',
        ],
        tasks: ['sass', 'cssmin']
      },
      component_styles: {
        files: [
          'components/*/*.*'
        ],
        tasks: ['sass', 'cssmin']
      },
      patterns: {
        files: [
          'patterns/*'
        ],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.registerTask('default', ['sass', 'concat:js', 'cssmin', 'watch']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([            
      'connect',
      'watch'
    ]);
  });
};