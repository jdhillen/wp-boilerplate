#!/bin/bash
# postinstall.sh

# Generate a new Modernizr.js build
./node_modules/modernizr/bin/modernizr -c ./node_modules/modernizr/lib/config-all.json -d ./node_modules/modernizr -u
