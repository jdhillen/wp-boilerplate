#!/bin/bash
# modernizr.sh

# Generate a new Modernizr.js build
echo "Generating a new build of Modernizr.js with all options";

./node_modules/modernizr/bin/modernizr -c ./node_modules/modernizr/lib/config-all.json -d ./node_modules/modernizr -u
