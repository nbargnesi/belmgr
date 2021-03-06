#!/usr/bin/env bash
# set -e  # exit on any errors (jspm install errors on the belmgr-plugin install)

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"/../
EDITOR_DIR="$DIR"/webeditor
PATH="$EDITOR_DIR"/node_modules/.bin:$PATH

cd "$EDITOR_DIR"

if [ ! -L gulp ]; then
    echo "Linking gulp command into \"$EDITOR_DIR\" ..."
    ln -s ./node_modules/.bin/gulp .
fi

if [ ! -L jspm ]; then
    echo "Linking jspm command into \"$EDITOR_DIR\" ..."
    ln -s ./node_modules/.bin/jspm .
fi

echo "Running 'npm install' for BELMgr application ... "
npm install

echo "Running 'jspm install -y' for BELMgr application ... "
jspm install -y
jspm install belmgr-plugin -o {jspmNodeConversion: false}

echo "Running 'gulp build' for BELMgr application ... "
gulp build

echo "Enter webeditor directory and run 'gulp serve' to test application"

