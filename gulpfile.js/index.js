/**
 * Barrel Strength Design Gulp Base
 * Standard Gulp file setup for CSS/SCSS & JavaScript
 *
 * Version: 1.1.0
 *
 * (Basic) Installation notes:
 * 1. Open Terminal/CMD
 * 2. CD into gulpfile.js directory
 * 3. Run `npm Install`
 * 4. Move node_modules directory to the base directory (gulp-base)
 * 5. Run gulp to start task watcher
 * 
 * NOTE: To run Gulp from another directory, simply use 'gulp --cwd [path to gulpfile.js]'
 */

 // Include Core & Plugins
var gulp       = require('gulp'),
    config     = require('./config.json'),
    requireDir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true });

// Default Task
gulp.task('default', config.gulp.defaultTasks);