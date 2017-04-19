#!/usr/bin/env node
'use strict';


/* ==|== Required =============================================================================== */
var copy = require('copy');


/* ==|== Variables ============================================================================== */
var dir = {
    js: 'src/assets/scripts/vendor',
    css: 'src/assets/css/vendor'
};

var files = {
    js : [
        'node_modules/modernizr/modernizr.js',
        'node_modules/conditionizr/dist/conditionizr.js',
        'node_modules/jquery/dist/jquery.js'
    ],
    css : [
        'node_modules/normalize.css/normalize.css'
    ]
};


/* ==|== Copy NPM Javascript Files ============================================================== */
copy.each(files.js, dir.js, {flatten: true}, function(err, js) {
  if (err) throw err;
  console.log('NPM Javascript Files Copied');
});


/* ==|== Copy NPM CSS Files ===================================================================== */
copy.each(files.css, dir.css, {flatten: true}, function(err, js) {
  if (err) throw err;
    console.log('NPM CSS Files Copied');
});
