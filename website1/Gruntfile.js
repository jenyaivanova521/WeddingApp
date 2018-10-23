'use strict';

var fs = require('fs');

/**
 * Grunt module
 */
module.exports = function(grunt) {

    /**
	 * Dynamically load npm tasks
	 */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
		 * Set project info
		 */
        project: {
            src: 'src/public',
            dist: 'dist/public',
            sass: ['<%= project.src %>/sass/style.sass'],
            js: ['<%= project.src %>/js/{,*/}*.js'],
            img: ['<%= project.src %>/img/*.{png,jpg,jpeg,gif,webp,svg}']
        },

        /**
		 * Compile Sass/SCSS files
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Compiles all Sass/SCSS files and appends project banner
		 */
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: '',
                        src: '<%= project.sass %>',
                        dest: '<%= project.dist %>/css',
                        ext: '.css'
                    }
                ]
            }
        },

        /**
		 * Runs tasks against changed watched files
		 * https://github.com/gruntjs/grunt-contrib-watch
		 * Watching development files and run concat/compile tasks
		 * Livereload the browser once complete
		 */
        watch: {
            js: {
                files: '<%= project.js %>',
                tasks: ['build']
            },
            sass: {
                files: '<%= project.src %>/sass/{,*/}*.{scss,sass}',
                tasks: ['build']
            },
            copy: {
                files: [
                    '<%= project.src %>/fonts/*', '<%= project.src %>/img/*', '{,*/}*.{html,json,ico,txt,png,xml,svg}'
                ],
                tasks: ['copy:dist']
            },
            views: {
                files: [
                    'src/views/*', 'src/views/**'
                ],
                tasks: ['copy:views']
            }
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: ['.tmp', '<%= project.dist %>/{,*/}*', '!<%= project.dist %>/.git{,*/}*', 'dist/views']
                    }
                ]
            },
            js: {
                files: [
                    {
                        dot: true,
                        src: ['<%= project.dist %>/js/*.js', '!<%= project.dist %>/.git{,*/}*']
                    }
                ]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= project.src %>',
                        dest: '<%= project.dist %>',
                        src: ['fonts/**', 'img/**', 'lib/**', 'swf/**', '{,*/}*.{html,json,ico,txt,png,xml,svg}', 'static/**']
                    }
                ]
            },
            views: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/views',
                        dest: 'dist/views',
                        src: ['**']
                    }
                ]
            }
        },

        filerev: {
            dist: {
                src: ['<%= project.dist %>/js/{,*/}*.js', '<%= project.dist %>/css/{,*/}*.css', '<%= project.dist %>/img/{,*/}*.*']
            },
            options: {
                length: 32
            }
        },

        filerev_assets: {
            dist: {
                options: {
                    dest: 'dist/assets.json',
                    cwd: '<%= project.dist %>'
                }
            }
        }

    });

    grunt.registerTask('build', [
        'clean:dist',
        'sass:dist',
        'copy:dist',
        'copy:views',
        'filerev:dist',
        'filerev_assets'
    ]);

    grunt.registerTask('serve', ['build', 'watch']);

};
