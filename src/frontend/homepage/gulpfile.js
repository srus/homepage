/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;
var exec = require('child_process').exec;

var AUTOPREFIXER_BROWSERS = [
  '> 5%',
  'last 2 versions',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

// Copy all files (not dirs) at the root level (app)
gulp.task('copy', function () {
  return gulp.src([
    'app/*',
    '!app/_includes/*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}));
});

// Copy "fonts" folder
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}));
});

// Copy "_layouts" folder
gulp.task('layouts', function () {
  return gulp.src(['app/_layouts/*'])
    .pipe(gulp.dest('dist/_layouts'))
    .pipe($.size({title: 'layouts'}));
});

// Copy "about" folder
gulp.task('about', function () {
  return gulp.src(['app/about/*'])
    .pipe(gulp.dest('dist/about'))
    .pipe($.size({title: 'about'}));
});

// Copy "blog" folder
gulp.task('blog', function () {
  return gulp.src(['app/blog/*'])
    .pipe(gulp.dest('dist/blog'))
    .pipe($.size({title: 'blog'}));
});

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function () {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'app/styles/*.scss',
    'app/styles/**/*.css',
    'app/styles/components/components.scss'
  ])
    .pipe($.sourcemaps.init())
    .pipe($.changed('styles', {extension: '.scss'}))
    .pipe($.sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate And Minify Styles
    .pipe($.if('*.css', $.csso()))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size({title: 'styles'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src('app/_includes/*.html')
    .pipe(assets)
    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // Remove Any Unused CSS
    // Note: If not using the Style Guide, you can delete it from
    // the next line to only include styles your project uses.
    // .pipe($.if('*.css', $.uncss({
    //   html: [
    //     'app/index.html'
    //     // 'app/styleguide.html'
    //   ],
    //   // CSS Selectors for UnCSS to ignore
    //   // ignore: [
    //   //   /.side-nav.open/,
    //   //   /.header-bar.open/
    //   // ]
    // })))
    // Concatenate And Minify Styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    // Update Production Style Guide Paths
    .pipe($.replace('components/components.css', 'components/main.min.css'))
    // Minify Any HTML
    // .pipe($.if('*.html', $.minifyHtml()))
    // Output Files
    .pipe($.if('*.html', gulp.dest('dist/_includes'), gulp.dest('dist')))
    .pipe($.size({title: 'html'}));
});

// Static assets revisioning: unicorn.css → unicorn-098f6bcd.css
gulp.task('rev', function () {
  return gulp.src(['dist/styles/*.css', 'dist/scripts/*.js'], {base: 'dist'})
    .pipe(gulp.dest('dist'))
    .pipe($.rev())
    .pipe(gulp.dest('dist'))
    .pipe($.rev.manifest('dist/rev-manifest.json', {base: 'dist'}))
    .pipe(gulp.dest('dist'));
});

// Rewrite occurences of filenames which have been renamed by 'rev' task
gulp.task('rev-replace', function () {
  var manifest = gulp.src('dist/rev-manifest.json');
  return gulp.src('dist/_includes/*.html')
    .pipe($.revReplace({manifest: manifest}))
    .pipe(gulp.dest('dist/_includes'));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist/*', '!dist/.git', '!dist/.gitignore', '!dist/_drafts', '!dist/_posts', '!dist/images']));

// Build Jekyll site from 'app' folder
gulp.task('jekyll', function (cb) {
  exec('jekyll build --drafts --source app --destination dist/_site', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      throw error;
    }
    cb();
  });
});

// Build Jekyll site from 'dist' folder (assets compressed)
gulp.task('jekyll:dist', function (cb) {
  exec('jekyll build --drafts --source dist --destination dist/_site', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      throw error;
    }
    cb();
  });
});

// Serve the Jekyll site and watch files for changes & reload
gulp.task('serve', ['styles', 'jekyll'], function () {
  browserSync({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'dist/_site']
  });

  gulp.watch(['app/*.{yml,xml}'], ['jekyll', reload]);
  gulp.watch(['app/**/*.{html,md}'], ['jekyll', reload]);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', 'jekyll', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['jshint', 'jekyll', reload]);
  gulp.watch(['app/images/**/*'], ['jekyll', reload]);
});

// Serve the Jekyll site from 'dist' folder (assets compressed)
gulp.task('serve:dist', function () {
  runSequence('default', 'jekyll:dist', function () {
    browserSync({
      notify: false,
      // Run as an https by uncommenting 'https: true'
      // Note: this uses an unsigned certificate which on first access
      //       will present a certificate warning in the browser.
      // https: true,
      server: 'dist/_site'
    });
  });
});

// Build site ready to be pushed to GitHub (assets compressed)
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles',
              [ 'jshint',
                'html',
                'images',
                'fonts',
                'layouts',
                'about',
                'blog',
                'copy'
              ],
              'rev',
              'rev-replace',
              cb);
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://www.sergiorus.com',
  strategy: 'mobile'
}));

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
