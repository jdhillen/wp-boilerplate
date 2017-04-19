#!/usr/bin/env node
'use strict';


/* ==|== Required =============================================================================== */
const del = require('del');


/* ==|== Variables ============================================================================== */
let folders = [
    '.tmp',
    'dist'
];


/* ==|== Copy NPM CSS Files ===================================================================== */
del(folders).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
