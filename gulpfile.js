/* ==|== Imports ================================================================================ */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');

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
		'./src/assets/scripts/vendor/modernizr.js',
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

// /* ==|== Task - lint:js ========================================================================= */
// gulp.task("lint:js", () => {
// 	return gulp
// 		.src(SCRIPTS.WATCH)
// 		.pipe($.jshint())
// 		.pipe($.jshint.reporter("jshint-stylish"))
// 		.pipe($.jshint.reporter("fail"));
// });

// /* ==|== Task - build:js ======================================================================== */
// gulp.task("build:js", ["lint:js"], () => {
// 	return gulp
// 		.src(SCRIPTS.ALL)
// 		.pipe($.concat("scripts.min.js"))
// 		.pipe($.uglify())
// 		.on("error", (e) => {
// 			console.log(e);
// 		})
// 		.pipe(gulp.dest(SCRIPTS.DEST));
// });

// /* ==|== Task - build =========================================================================== */
// gulp.task("build", () => {
// 	sequence(
// 		"env:prod",
// 		"env:template",
// 		"build:clean",
// 		"build:styles",
// 		"build:js",
// 		"build:copy"
// 	);
// });

/* ==|== Task - BrowserSync ============================================================================================================= */
function browsersync() {
	browserSync.init({
		files: [PROJECT.WATCH, STYLES.WATCH, SCRIPTS.WATCH],
		proxy: PROJECT.URL,
		host: PROJECT.URL,
		open: 'external'
	});
}

/* ==|== Task - Reload ================================================================================================================== */
function reload() {
	browserSync.reload();
}

/* ==|== Task - styles ================================================================================================================== */
function styles() {
	return gulp
		.src(STYLES.SRC)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(STYLES.DEST))
		.pipe(browserSync.stream());
}

exports.styles = styles;

/* ==|== Task - build:clean ============================================================================================================= */
function clean() {
	return del(TO_CLEAN);
}

exports.clean = clean;

// /* ==|== Task - Copy ================================================================================================================= */
function copy() {
	return gulp.src(COPY_FILES, { base: 'src' }).pipe(gulp.dest(PROJECT.DEST));
}

/* ==|== Task - Watch =================================================================================================================== */
function watch() {
	browsersync();
	gulp.watch(STYLES.WATCH, styles);
	gulp.watch(PROJECT.WATCH, reload);
}

exports.watch = watch;

/* ==|== Task - Build =================================================================================================================== */
const build = gulp.series(clean, styles, copy);
exports.build = build;
