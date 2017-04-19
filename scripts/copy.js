#!/usr/bin/env node
'use strict';


/* ==|== Required =============================================================================== */
const copy = require('copy');


/* ==|== Variables ============================================================================== */
let dir = {
    js: 'src/assets/scripts/vendor',
    css: 'src/assets/css/vendor'
};

let files = {
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
copy.each(files.js, dir.js, {flatten: true}, function(err, files) {
    if (err) throw err;
    console.log('\nFiles Copied : Javascript');
    for (let i = 0; i < files.length; i++) {
        console.log( files[i].history[0] );
    }
});


/* ==|== Copy NPM CSS Files ===================================================================== */
copy.each(files.css, dir.css, {flatten: true}, function(err, files) {
    if (err) throw err;
    console.log('\nFiles Copied : CSS');
    for (let i = 0; i < files.length; i++) {
        console.log( files[i].history[0] );
    }
});
