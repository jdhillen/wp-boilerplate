/* jshint node: true */
/* global $: true */
"use strict";

var gulp = require( "gulp" ),
	/** @type {Object} Loader of Gulp plugins from `package.json` */
	$ = require( "gulp-load-plugins" )(),
	/** @type {Array} JS source files to concatenate and uglify */
	uglifySrc = [
		/** Modernizr */
		"node_modules/modernizr/modernizr.js",
		/** Conditionizr */
		"node_modules/conditionizr/dist/conditionizr.js",
		/** jQuery */
		"node_modules/jquery/dist/jquery.js",
		/** Page scripts */
		"src/assets/scripts/scripts.js"
	],
	/** @type {Object of Array} CSS source files to concatenate and minify */
	cssminSrc = {
		development: [
			/** The banner of `style.css` */
			"src/assets/css/banner.css",
			/** Theme style */
			"src/assets/css/styles.css"
		],
		production: [
			/** The banner of `style.css` */
			"src/assets/css/banner.css",
			/** Normalize */
			"node_modules/normalize.css/normalize.css",
			/** Theme style */
			"src/assets/css/styles.css"
		]
	},
	/** @type {String} Used inside task for set the mode to 'development' or 'production' */
	env = (function() {
		/** @type {String} Default value of env */
		var env = "development";

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

/** Clean */
gulp.task( "clean", require( "del" ).bind( null, [ ".tmp", "dist" ] ) );

/** Copy */
gulp.task( "copy", function() {
	return gulp.src([
			"src/*.{php,png,css}",
			"src/assets/img/**/*.{jpg,png,svg,gif,webp,ico}",
			"src/assets/fonts/*.{woff,woff2,ttf,otf,eot,svg}",
			"src/library/**/*.php",
			"src/page-templates/**/*.php",
			"src/template-parts/**/*.php",
			"src/languages/*.{po,mo,pot}"
		], {
			base: "src"
		})
		.pipe( gulp.dest( "dist" ) );
});

/** CSS Preprocessors */
gulp.task( "sass", function () {
	return gulp.src( "src/assets/scss/styles.scss" )
		.pipe( $.sourcemaps.init() )
		.pipe( $.sass() )
		.pipe( $.sourcemaps.write( "." ) )
		.on( "error", function( e ) {
			console.error( e );
		})
		.pipe( gulp.dest( "src/assets/css" ) );
});

/** STYLES */
gulp.task( "styles", [ "sass" ], function() {
	console.log( "`styles` task run in `" + env + "` environment" );

	var stream = gulp.src( cssminSrc[ env ] )
		.pipe( $.concat( "styles.css" ))
		.pipe( $.autoprefixer( "last 2 version" ) );

	if ( env === "production" ) {
		stream = stream.pipe( $.csso() );
	}

	return stream.on( "error", function( e ) {
		console.error( e );
	})
	.pipe( gulp.dest( "src" ) );
});

/** JSHint */
gulp.task( "jshint", function () {
	/** Test all `js` files exclude those in the `lib` folder */
	return gulp.src( "src/assets/scripts/{!(lib)/*.js,*.js}" )
		.pipe( $.jshint() )
		.pipe( $.jshint.reporter( "jshint-stylish" ) )
		.pipe( $.jshint.reporter( "fail" ) );
});

/** Templates */
gulp.task( "template", function() {
	console.log( "`template` task run in `" + env + "` environment" );

    var is_debug = ( env === "production" ? "false" : "true" );

    return gulp.src( "src/library/is_debug.php" )
        .pipe( $.template({ is_debug: is_debug }) )
        .pipe( gulp.dest( "src/library" ) );
});

/** Uglify */
gulp.task( "uglify", function() {
	return gulp.src( uglifySrc )
		.pipe( $.concat( "scripts.min.js" ) )
		.pipe( $.uglify() )
		.pipe( gulp.dest( "dist/assets/js" ) );
});

/** `env` to 'production' */
gulp.task( "envProduction", function() {
	env = "production";
});

/** Livereload */
gulp.task( "watch", [ "template", "styles", "jshint" ], function() {
	var server = $.livereload;
	server.listen();

	/** Watch for livereoad */
	gulp.watch([
		"src/assets/scripts/**/*.js",
		"src/*.php",
		"src/*.css"
	]).on( "change", function( file ) {
		console.log( file.path );
		server.changed( file.path );
	});

	/** Watch for autoprefix */
	gulp.watch( [
		"src/css/*.css",
		"src/assets/sass/**/*.scss"
	], [ "styles" ] );

	/** Watch for JSHint */
	gulp.watch( "src/js/{!(lib)/*.js,*.js}", ["jshint"] );
});

/** Build */
gulp.task( "build", [
	"envProduction",
	"clean",
	"template",
	"styles",
	"jshint",
	"copy",
	"uglify"
], function () {
	console.log("Build is finished");
});

/** Gulp default task */
gulp.task( "default", ["watch"] );
