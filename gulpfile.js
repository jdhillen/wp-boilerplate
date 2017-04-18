/* jshint node: true */
/* global $: true */
'use strict';

/* ==|== Init =================================================================================== */
var gulp = require( 'gulp' ),
	/** @type {Object} Loader of Gulp plugins from `package.json` */
	$ = require( 'gulp-load-plugins' )(),
	/** @type {Array} JS source files to concatenate and uglify */
	uglifySrc = [
		/** Modernizr */
		'src/assets/scripts/vendor/modernizr.js',
		/** Conditionizr */
		'src/assets/scripts/vendor/conditionizr.js',
		/** jQuery */
		'src/assets/scripts/vendor/jquery.js',
		/** Page scripts */
		'src/assets/scripts/scripts.js'
	],
	/** @type {Object of Array} CSS source files to concatenate and minify */
	cssminSrc = {
		development: [
			/** Theme style */
			'src/assets/css/styles.css'
		],
		production: [
			/** Normalize */
			'src/assets/css/vendor/normalize.css',
			/** Theme style */
			'src/assets/css/styles.css'
		]
	},
	/** @type {String} Used inside task for set the mode to 'development' or 'production' */
	env = (function() {
		/** @type {String} Default value of env */
		var env = 'development';

		/** Test if there was a different value from CLI to env
			Example: gulp styles --env=production
			When ES6 will be default. `find` will replace `some`  */
		process.argv.some(function( key ) {
			var matches = key.match( /^\-{2}env\=([A-Za-z]+)$/ );

			if ( matches && matches.length === 2 ) {
				env = matches[1];
				return true;
			}
		});

		return env;
	} ());


/* ==|== Gulp Task : clean ====================================================================== */
gulp.task( 'clean', require( 'del' ).bind( null, [ '.tmp', 'dist' ] ) );


/* ==|== Gulp Task : copy ======================================================================= */
gulp.task( 'copy', function() {
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
gulp.task( 'sass', function () {
	return gulp.src( 'src/assets/scss/styles.scss' )
		.pipe( $.sourcemaps.init() )
		.pipe( $.sass() )
		.pipe( $.sourcemaps.write( '.', {addComment: false}) )
		.on( 'error', function( e ) {
			console.error( e );
		})
		.pipe( gulp.dest( 'src/assets/css' ) );
});


/* ==|== Gulp Task : styles ===================================================================== */
gulp.task( 'styles', [ 'sass' ], function() {
	console.log( '`styles` task run in `' + env + '` environment' );

	var stream = gulp.src( cssminSrc[ env ] )
		.pipe( $.concat( 'styles.css' ))
		.pipe( $.autoprefixer( 'last 2 version' ) );

	if ( env === 'production' ) {
		stream = stream.pipe( $.csso() );
	}

	return stream.on( 'error', function( e ) {
		console.error( e );
	})
	.pipe( gulp.dest( 'src/assets/css' ) );
});


/* ==|== Gulp Task : jshint ===================================================================== */
gulp.task( 'jshint', function () {
	/** Test all `js` files exclude those in the `vendor` folder */
	return gulp.src( 'src/assets/scripts/{!(vendor)/*.js,*.js}' )
		.pipe( $.jshint() )
		.pipe( $.jshint.reporter( 'jshint-stylish' ) )
		.pipe( $.jshint.reporter( 'fail' ) );
});


/* ==|== Gulp Task : template =================================================================== */
gulp.task( 'template', function() {
	console.log( '`template` task run in `' + env + '` environment' );

    var is_debug = ( env === 'production' ? 'false' : 'true' );

    return gulp.src( 'src/inc/is_debug.php' )
        .pipe( $.template({ is_debug: is_debug }) )
        .pipe( gulp.dest( 'src/inc' ) );
});


/* ==|== Gulp Task : uglify ===================================================================== */
gulp.task( 'uglify', function() {
	return gulp.src( uglifySrc )
		.pipe( $.concat( 'scripts.min.js' ) )
		.pipe( $.uglify() )
		.pipe( gulp.dest( 'dist/assets/js' ) );
});


/* ==|== Gulp Task : envProduction ============================================================== */
gulp.task( 'envProduction', function() {
	env = 'production';
});


/* ==|== Gulp Task : watch ====================================================================== */
gulp.task( 'watch', [ 'template', 'styles', 'jshint' ], function() {
	var server = $.livereload;
	server.listen();

	/** Watch for livereoad */
	gulp.watch([
		'src/assets/scripts/**/*.js',
		'src/assets/css/*.css',
		'src/*.php'
	]).on( 'change', function( file ) {
		console.log( file.path );
		server.changed( file.path );
	});

	/** Watch for autoprefix */
	gulp.watch( [
		'src/assets/css/*.css',
		'src/assets/scss/**/*.scss'
	], [ 'styles' ] );

	/** Watch for JSHint */
	gulp.watch( 'src/assets/js/{!(vendor)/*.js,*.js}', ['jshint'] );
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
], function () {
	console.log('Build is finished');
});


/* ==|== Gulp Task : default ==================================================================== */
gulp.task( 'default', ['watch'] );
