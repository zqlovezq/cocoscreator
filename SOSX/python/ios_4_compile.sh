#!/bin/bash
export COCOS_ROOT="/Applications/CocosCreator/Creator/2.4.3/CocosCreator.app/Contents/MacOS/"
python3 ./build.py -f compile -p ios
if [ $? != 0 ]; then
  echo "STEP_4_FAILED"
  exit 1
fi
