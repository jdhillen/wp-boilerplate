#!/usr/bin/env node
'use strict';


/* ==|== Required =============================================================================== */
const shell = require('shelljs');


/* ==|== Generate a new Modernizr.js build ====================================================== */
shell.echo('Generating a new build of Modernizr.js with all options');
shell.exec('./node_modules/modernizr/bin/modernizr -c ./node_modules/modernizr/lib/config-all.json -d ./node_modules/modernizr -u');
