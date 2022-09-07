/* ==|== Imports ================================================================================ */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();
const del = require('del');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

/* ==|== Template Config ======================================================================== */
// Project
const PROJECT = {
  NAME: 'wp-boilerplate', // Name of your Project
  URL: 'URL_GOES_HERE', // URL of your Project
  WATCH: './src/**/*.php', // Path to watch for php template changes
  DEST: './dist/'
};

// Styles
const STYLES = {
  SRC: './src/assets/scss/styles.scss', // Path to main .scss file
  VENDOR: './src/assets/scss/vendor/*.css', // Path to vendor .css files
  WATCH: './src/assets/scss/{!(vendor)/*.scss,*.scss}', // Path of css file to watch
  DEST: './src/assets/css/' // Path to place the compiled CSS file
};

// Scripts
const SCRIPTS = {
  SRC: './src/assets/scripts/scripts.js', // Path to main .js file
  VENDOR: './src/assets/scripts/vendor/*.js', // Path to vendor .js files
  WATCH: './src/assets/scripts/{!(vendor)/*.js,*.js}', // Path of js files to watch
  DEST: './src/assets/js/',
  ALL: [
    './src/assets/scripts/vendor/jquery.js',
    './src/assets/scripts/scripts.js'
  ]
};

// Files to copy to the 'Dist' folder
const COPY_FILES = [
  './src/*.{php,png,css}',
  './src/assets/css/*',
  './src/assets/js/*.min.js',
  './src/assets/img/**/**',
  './src/assets/fonts/*.{woff,woff2,ttf,otf,eot,svg}',
  './src/inc/**',
  './src/page-templates/**',
  './src/template-parts/**',
  './src/languages/**'
];

// Files or Folders to clean
const TO_CLEAN = ['.tmp', PROJECT.DEST];

/* ==|== Task - BrowserSync ===================================================================== */
function browserSync() {
  browsersync.init({
    files: [PROJECT.WATCH, STYLES.WATCH, SCRIPTS.WATCH],
    proxy: PROJECT.URL,
    host: PROJECT.URL,
    open: 'external'
  });
}

/* ==|== Task - Reload ========================================================================== */
function reload() {
  browsersync.reload();
}

/* ==|== Task - Styles ========================================================================== */
function styles() {
  return gulp
    .src(STYLES.SRC)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(STYLES.DEST))
    .pipe(browsersync.stream());
}

/* ==|== Task - Build:Styles ==================================================================== */
function buildStyles() {
  return gulp
    .src(STYLES.SRC)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(STYLES.DEST))
    .pipe(browsersync.stream());
}

/* ==|== Task - Lint ============================================================================ */
function lint() {
  return gulp
    .src([SCRIPTS.WATCH])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

/* ==|== Task - Build:Scripts =================================================================== */
function buildScripts() {
  return gulp
    .src(SCRIPTS.ALL)
    .pipe(concat('scripts.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(SCRIPTS.DEST))
    .pipe(browsersync.stream());
}

/* ==|== Task - build:clean ===================================================================== */
function clean() {
  return del(TO_CLEAN);
}

// /* ==|== Task - Copy ========================================================================= */
function copy() {
  return gulp.src(COPY_FILES, { base: 'src' }).pipe(gulp.dest(PROJECT.DEST));
}

/* ==|== Task - Watch =========================================================================== */
function watch() {
  browserSync();
  styles();
  gulp.watch(STYLES.WATCH, styles);
  gulp.watch(PROJECT.WATCH, reload);
}

/* ==|== Complex Tasks=========================================================================== */
const js = gulp.series(lint, buildScripts);
const build = gulp.series(clean, buildStyles, buildScripts, copy);

/* ==|== Exports ================================================================================ */
exports.clean = clean;
exports.styles = styles;
exports.js = js;
exports.watch = watch;
exports.build = build;
exports.default = watch;
