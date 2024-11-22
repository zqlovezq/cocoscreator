#!/bin/bash
python3 ./version_generator.py -c channel_ios
if [ $? != 0 ]; then
  echo "STEP_3_FAILED"
  exit 1
fi
