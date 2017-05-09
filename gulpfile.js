/* ==|== Imports ================================================================================ */
let gulp        = require('gulp');
let $           = require('gulp-load-plugins')();
let sequence    = require('run-sequence').use(gulp);
let browserSync = require('browser-sync').create();
let del         = require('del');
let merge       = require('merge-stream');


/* ==|== Template Config ======================================================================== */
// Project
const PROJECT =  {
	NAME  : 'wp-boilerplate',			// Name of your Project
	URL   : 'nullpixel.dev',			// URL of your Project
	WATCH : './src/**/*.php',			// Path to watch for php template changes
	DEST  : './dist/'
};

// Styles
const STYLES = {
	SRC    : './src/assets/scss/styles.scss',					// Path to main .scss file
	VENDOR : './src/assets/scss/vendor/*.css',					// Path to vendor .css files
	WATCH  : './src/assets/scss/{!(vendor)/*.scss,*.scss}',		// Path of css file to watch
	DEST   : './src/assets/css/'								// Path to place the compiled CSS file
};

// Scripts
const SCRIPTS = {
	SRC    : './src/assets/scripts/scripts.js',					// Path to main .js file
	VENDOR : './src/assets/scripts/vendor/*.js',				// Path to vendor .js files
	WATCH  : './src/assets/scripts/{!(vendor)/*.js,*.js}',		// Path of js files to watch
	DEST   : './src/assets/js/',
	ALL	   : [
		'./src/assets/scripts/vendor/modernizr.js',
		'./src/assets/scripts/vendor/jquery.js',
		'./src/assets/scripts/scripts.js'
	]
};

// Files to copy to the 'Dist' folder
const COPY_FILES = [
	'./src/*.{php,png,css}',
	'./src/assets/css/*.min.css',
	'./src/assets/js/*.min.js',
	'./src/assets/img/**/*.{jpg,png,svg,gif,webp,ico}',
	'./src/assets/fonts/*.{woff,woff2,ttf,otf,eot,svg}',
	'./src/inc/**',
	'./src/page-templates/**',
	'./src/template-parts/**',
	'./src/languages/**'
];

// Files or Folders to clean
const TO_CLEAN = [
	'.tmp',
	PROJECT.DEST
];

// Browsers to target when prefixing CSS.
const COMPATIBILITY = [
	'> 1%',
    'last 2 versions'
];

const MINIFY_OPTIONS = {
	restructure: false,
	comments: false
};


/* ==|== Variables ============================================================================== */
let env = (() => {
	var env = 'dev';

	process.argv.find( key => {
		var matches = key.match(/^\-{2}env\=([A-Za-z]+)$/);

		if (matches && matches.length === 2) {
			env = matches[1];
			return true;
		}
	});

	return env;
})();


/* ==|== Task - browser-sync ==================================================================== */
gulp.task('browser-sync', () => {
	browserSync.init({
		files: [ PROJECT.WATCH, STYLES.WATCH, SCRIPTS.WATCH ],
		proxy: PROJECT.URL,
		host: PROJECT.URL,
		open: 'external'
	});
});


/* ==|== Task - env:prod ======================================================================== */
gulp.task( 'env:prod', () => {
	env = 'prod';
});


/* ==|== Task - env:template ==================================================================== */
gulp.task( 'env:template', () => {
	console.log( '`template` task run in `' + env + '` environment' );

    var is_debug = ( env === 'prod' ? 'false' : 'true' );

    return gulp.src( './src/dev-templates/is-debug.php' )
        .pipe( $.template({ is_debug: is_debug }) )
        .pipe( gulp.dest( 'src/inc' ) );
});


/* ==|== Task - build:clean ===================================================================== */
gulp.task( 'build:clean', () => {
	del( TO_CLEAN );
});


/* ==|== Task - compile:scss ==================================================================== */
gulp.task( 'compile:scss', () => {
	return gulp
		.src( STYLES.SRC )
		.pipe( $.sourcemaps.init() )
		.pipe( $.sass() )
		.pipe( $.sourcemaps.write( '.' ) )
		.on( 'error', e => { console.log(e); })
		.pipe( gulp.dest( STYLES.DEST ) )
		.pipe( browserSync.stream() );
});


/* ==|== Task - build:styles ==================================================================== */
gulp.task( 'build:styles', () => {
	var css = gulp
		.src( STYLES.VENDOR )
		.pipe( $.concat('css-files.css') );

	var scss = gulp
		.src( STYLES.SRC )
		.pipe( $.sass() )
		.pipe( $.concat('scss-files.scss') );

	var merged = merge( css, scss)
		.on( 'error', e => { console.log(e); })
        .pipe( $.concat('styles.min.css') )
		.pipe( $.autoprefixer( COMPATIBILITY ) )
        .pipe( $.csso( MINIFY_OPTIONS ) )
        .pipe( gulp.dest( STYLES.DEST ));

	return merged;
});


/* ==|== Task - lint:js ========================================================================= */
gulp.task( 'lint:js', () => {
	return gulp
		.src( SCRIPTS.WATCH )
		.pipe( $.jshint() )
		.pipe( $.jshint.reporter( 'jshint-stylish' ) )
		.pipe( $.jshint.reporter( 'fail' ) );
});


/* ==|== Task - build:js ======================================================================== */
gulp.task( 'build:js', ['lint:js'], () => {
	return gulp
		.src( SCRIPTS.ALL )
		.pipe( $.concat( 'scripts.min.js' ) )
		.pipe( $.uglify() )
		.on( 'error', e => { console.log(e); })
		.pipe( gulp.dest( SCRIPTS.DEST ) );
});


/* ==|== Task - build =========================================================================== */
gulp.task( 'build', () => {
	sequence(
		'env:prod',
	  	'env:template',
		'build:clean',
	  	'build:styles',
	  	'build:js',
	  	'build:copy'
	);
});


/* ==|== Task - build:copy ====================================================================== */
gulp.task( 'build:copy', () => {
	return gulp
		.src( COPY_FILES, { base: 'src' })
		.pipe( gulp.dest( PROJECT.DEST ) );
});


/* ==|== Task - watch =========================================================================== */
gulp.task( 'watch', ['env:template', 'compile:scss', 'lint:js', 'browser-sync'], () => {

	// Watch SCSS Files for Changes
	gulp.watch( STYLES.WATCH, ['compile:scss'] );

	// Watch Javascript Files for Changes
	gulp.watch( SCRIPTS.WATCH, ['lint:js'] );
});


/* ==|== Task : default ========================================================================= */
gulp.task( 'default', ['watch'] );
