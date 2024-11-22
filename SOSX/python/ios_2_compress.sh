#!/bin/bash
python3 ./compress.py -c ../../sosx_texture_cache/ -t png
if [ $? != 0 ]; then
  echo "STEP_2_FAILED"
  exit 1
fi
