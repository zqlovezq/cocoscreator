#!/bin/bash
#进入脚本所在目录
CURRENT_DIR=$(cd $(dirname $0); pwd)
ProjectPath=$(dirname "$PWD")
enginePath=/Applications/Cocos/Creator/3.8.2/CocosCreator.app/Contents/MacOS/CocosCreator

isRelease=$1
appVersion=$2
uplpadDir=$3

echo "----------准备构建----------- \n项目目录 $ProjectPath "

# $enginePath --project "/Users/aplay_shanhaijing/Documents/iplay/chickenStar/project/client" --build "platform=ios"

node change_version.js $isRelease $appVersion


echo "----------上传目录 $CURRENT_DIR/$uplpadDir "

# python updata_cos_fkqs_client.py $CURRENT_DIR/$uplpadDir

