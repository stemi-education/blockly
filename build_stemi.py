#!/usr/bin/python2.7
# Copies blockly_compressed.js and blocks_compressed.js to the ./stemi/js/ directory.
# hexapod-js submodule must be initialized:
#   $ cd hexapod-js
#   $ git submodule init

from shutil import copyfile

copyfile("blockly_compressed.js", "stemi/js/blockly_compressed.js")
copyfile("blocks_compressed.js", "stemi/js/blocks_compressed.js")
copyfile("javascript_compressed.js", "stemi/js/javascript_compressed.js")
copyfile("hexapod-js/web/hexapod-web.js", "stemi/js/hexapod-web.js")
