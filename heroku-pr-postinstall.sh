#!/usr/bin/env bash

if [[ $HEROKU_APP_NAME = *"-pr-"* ]]; then
  echo "heroku-pr-postinstall.sh: building $HEROKU_APP_NAME "
  npm install -g grunt-cli
  grunt heroku
fi
