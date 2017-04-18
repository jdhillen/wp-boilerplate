#!/bin/bash
# postinstall.sh

# Generate a new Modernizr.js build
./node_modules/modernizr/bin/modernizr -c ./node_modules/modernizr/lib/config-all.json -d ./node_modules/modernizr -u

js_vendor_dir="./src/assets/scripts/vendor"

buildJS() {
    mkdir $js_vendor_dir
    cp ./node_modules/modernizr/modernizr.js $js_vendor_dir
    cp ./node_modules/conditionizr/dist/conditionizr.js $js_vendor_dir
    cp ./node_modules/jquery/dist/jquery.js $js_vendor_dir
}

if [ -d $js_vendor_dir ]
then
  rm -rf $js_vendor_dir
  buildJS
else
  buildJS
fi

css_vendor_dir="./src/assets/css/vendor"

buildCSS() {
    mkdir $css_vendor_dir
    cp ./node_modules/normalize.css/normalize.css $css_vendor_dir
}

if [ -d $css_vendor_dir ]
then
  rm -rf $css_vendor_dir
  buildCSS
else
  buildCSS
fi
