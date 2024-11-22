#!/bin/bash
chmod -R 777 .

./ios_1_build.sh
if [ $? != 0 ]; then
  exit 1
fi

./ios_2_compress.sh
if [ $? != 0 ]; then
  exit 1
fi

./ios_3_version.sh
if [ $? != 0 ]; then
  exit 1
fi

./ios_4_compile.sh
if [ $? != 0 ]; then
  exit 1
fi
