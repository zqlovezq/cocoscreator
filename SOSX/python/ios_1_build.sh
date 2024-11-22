#!/bin/bash
export COCOS_ROOT="/Applications/CocosCreator/Creator/2.4.4/CocosCreator.app/Contents/MacOS/"
python3 ./build.py -f build -p ios
if [ $? != 0 ]; then
  echo "STEP_1_FAILED"
  exit 1
fi
