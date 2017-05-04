/* jshint node: true */
'use strict';

/* ==|== Imports ================================================================================ */
let gulp = require( 'gulp' );
let plugins = require( 'gulp-load-plugins' )();
let browserSync = require('browser-sync').create();
let del = require( 'del' );


/* ==|== Constants ============================================================================== */
const reload = browserSync.reload;


/* ==|== Template Config ======================================================================== */
// Project
const project =  {
	name  : 'wp-boilerplate',		// Name of your Project
	url   : 'http://nullpixel.dev',	// URL of your Project
	watch : './src/**/*.php',		// Path to watch for php template changes
	dest  : './dist/'
};

// Styles
const styles = {
	src	   : './src/assets/scss/styles.scss',	// Path to main .scss file
	vendor : './src/assets/scss/vendor/*.css',	// Path to vendor .css files
	watch  : './src/assets/css/styles.css',		// Path of css file to watch
	dest   : './src/assets/css/'				// Path to place the compiled CSS file
};

// Scripts
const scripts = {
	src    : './src/assets/scripts/scripts.js',	// Path to main .js file
	vendor : './src/assets/scripts/vendor/*.js',	// Path to vendor .js files
	watch  : './src/assets/js/scripts.js',		// Path of js files to watch
	dest   : './src/assets/js/'
};

// Files or Folders to clean
const toClean = [
	'.tmp',
	project.dest
];


/* ==|== Variables ============================================================================== */
let	uglifySrc = [
	'src/assets/scripts/vendor/modernizr.js',
	'src/assets/scripts/vendor/jquery.js',
	'src/assets/scripts/scripts.js'
];

let cssminSrc = {
	development: [
		'src/assets/css/styles.css'
	],
	production: [
		'src/assets/css/vendor/normalize.css',
		'src/assets/css/styles.css'
	]
};

let env = () => {
	var env = 'development';

	process.argv.some(function( key ) {
		var matches = key.match( /^\-{2}env\=([A-Za-z]+)$/ );

		if ( matches && matches.length === 2 ) {
			env = matches[1];
			return true;
		}
	});

	return env;
};


/* ==|== Gulp Task : browser-sync =============================================================== */
gulp.task('browser-sync', () => {
	let myFiles = [
		project.watch,
		styles.watch,
		scripts.watch
	];

	browserSync.init({
		files: myFiles,
		proxy: {
			target: project.url
		},
		open: true,
		injectChanges: true,
	});
});


/* ==|== Gulp Task : clean ====================================================================== */
gulp.task( 'clean', () => {
	del( toClean );
});

/* ==|== Gulp Task : copy ======================================================================= */
gulp.task( 'copy', () => {
	return gulp.src([
		'src/*.{php,png,css}',
		'src/assets/css/*.css',
		'src/assets/img/**/*.{jpg,png,svg,gif,webp,ico}',
		'src/assets/fonts/*.{woff,woff2,ttf,otf,eot,svg}',
		'src/inc/**/*.php',
		'src/page-templates/**/*.php',
		'src/template-parts/**/*.php',
		'src/languages/*.{po,mo,pot}'
	], {
		base: 'src'
	})
	.pipe( gulp.dest( 'dist' ) );
});


/* ==|== Gulp Task : sass ======================================================================= */
gulp.task( 'sass', () => {
	return gulp.src( 'src/assets/scss/styles.scss' )
		.pipe( plugins.sourcemaps.init() )
		.pipe( plugins.sass() )
		.pipe( plugins.sourcemaps.write( '.' ) )
		.on( 'error', function( e ) {
			console.error( e );
		})
		.pipe( gulp.dest( 'src/assets/css' ) )
		.pipe( browserSync.stream() );
});


/* ==|== Gulp Task : styles ===================================================================== */
gulp.task( 'styles', [ 'sass' ], () => {
	console.log( '`styles` task run in `' + env + '` environment' );

	var stream = gulp.src( cssminSrc[ env ] )
		.pipe( plugins.concat( 'styles.css' ))
		.pipe( plugins.autoprefixer( 'last 2 version' ) );

	if ( env === 'production' ) {
		stream = stream.pipe( plugins.csso() );
	}

	return stream.on( 'error', function( e ) {
			console.error( e );
		})
		.pipe( gulp.dest( 'src/assets/css' ) )
		.pipe( browserSync.stream() );
});


/* ==|== Gulp Task : jshint ===================================================================== */
gulp.task( 'jshint', () => {
	/** Test all `js` files exclude those in the `vendor` folder */
	return gulp.src( 'src/assets/scripts/{!(vendor)/*.js,*.js}' )
		.pipe( plugins.jshint() )
		.pipe( plugins.jshint.reporter( 'jshint-stylish' ) )
		.pipe( plugins.jshint.reporter( 'fail' ) );
});


/* ==|== Gulp Task : template =================================================================== */
gulp.task( 'template', () => {
	console.log( '`template` task run in `' + env + '` environment' );

    var is_debug = ( env === 'production' ? 'false' : 'true' );

    return gulp.src( 'src/dev-templates/is-debug.php' )
        .pipe( plugins.template({ is_debug: is_debug }) )
        .pipe( gulp.dest( 'src/inc' ) );
});


/* ==|== Gulp Task : uglify ===================================================================== */
gulp.task( 'uglify', () => {
	return gulp.src( uglifySrc )
		.pipe( plugins.concat( 'scripts.min.js' ) )
		.pipe( plugins.uglify() )
		.pipe( gulp.dest( 'dist/assets/js' ) );
});


/* ==|== Gulp Task : envProduction ============================================================== */
gulp.task( 'envProduction', () => {
	env = 'production';
});


/* ==|== Gulp Task : watch ====================================================================== */
gulp.task( 'watch', [ 'template', 'styles', 'jshint', 'browser-sync'], () => {

	/** Watch for BrowserSync */
	gulp.watch().on( 'change', (file) => {
		// console.log( file.path );
		browserSync.notify( file.path );
	});

	/** Watch for autoprefix */
	gulp.watch( [
		'src/assets/css/*.css',
		'src/assets/scss/**/*.scss'
	], [ 'styles' ] );

	/** Watch for JSHint */
	gulp.watch( 'src/assets/scripts/{!(vendor)/*.js,*.js}', ['jshint'] );
});


/* ==|== Gulp Task : build ====================================================================== */
gulp.task( 'build', [
	'envProduction',
	'clean',
	'template',
	'styles',
	'jshint',
	'copy',
	'uglify'
], () => {
	console.log('Build is finished');
});


/* ==|== Gulp Task : default ==================================================================== */
gulp.task( 'default', ['watch'] );
