# -*- coding:utf-8 -*-
import os,sys,argparse,platform

from configparser import ConfigParser
config = ConfigParser()
config.read('version_config.ini', encoding='utf-8')

COCOS_ROOT = os.getenv("COCOS_ROOT")
if COCOS_ROOT == None:
    print("CANNOT FOUND COCOS_ROOT !!")
    sys.exit(1)

editor_exe = "CocosCreator"
if(platform.system()=='Windows'):
    editor_exe = "CocosCreator.exe"
editor_path = os.path.join(COCOS_ROOT, editor_exe)
project_dir = os.path.abspath("../")
buildPath  = os.path.abspath(os.path.dirname(config.get("DEFAULT", "jsb_root")))
keystore = "useDebugKeystore=false;keystorePath={};keystorePassword=8089Abcd;keystoreAlias=CZXZ;keystoreAliasPassword=8089Abcd;".format(os.path.abspath("czxz-release-key.keystore"))
cfg = "debug=false;optimizeHotUpdate=false;sourceMaps=false;autoCompile=false;"
cfg_web = "md5Cache=true;inlineSpriteFrames=true;"
cfg_native = "template=default;inlineSpriteFrames=false;inlineSpriteFrames_native=false;md5Cache=true;nativeMd5Cache=true;encryptJs=true;xxteaKey=88d198fc-138f-43;zipCompressJs=true;"
cfg_android = "apiLevel=28;appABIs=['armeabi-v7a:x86'];"
cfg_wechat = "mainIsRemote=true;"

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--flag', required=True, choices=["build", "compile"],help='build or compile')
    parser.add_argument('-p', '--platform', required=True, choices=["android", "ios", "web-mobile", "wechatgame"],help='build platform')
    parser.add_argument('-d', '--dst', required=False,help='build path')
    args = parser.parse_args()
    
    if args.platform == "android":
        cfg += cfg_native + cfg_android + keystore
    elif args.platform == "ios":
        cfg += cfg_native
    elif args.platform == "wechatgame":
        cfg += cfg_web + cfg_wechat
    else:
        cfg += cfg_web
        
    if args.dst != None:
        buildPath = args.dst
        
    cmd = "{} --path {} --{} \"platform={};buildPath={};{}\"".format(editor_path, project_dir, args.flag, args.platform, buildPath, cfg)
    print (cmd)
    errcode = os.system(cmd)
    
    if args.platform == "android":
        gradleProp = os.path.join(buildPath, "jsb-default/frameworks/runtime-src/proj.android-studio/gradle.properties")
        if os.path.exists(gradleProp):
            f = open(gradleProp, 'r', encoding='UTF-8')
            content = f.read()
            f.close()
            if content.find("PROP_COMPILE_SDK_VERSION=-1") >= 0 or content.find("PROP_TARGET_SDK_VERSION=-1") >= 0:
                content = content.replace("PROP_COMPILE_SDK_VERSION=-1", "PROP_COMPILE_SDK_VERSION=28", 1)
                content = content.replace("PROP_TARGET_SDK_VERSION=-1", "PROP_TARGET_SDK_VERSION=28", 1)
                f = open(gradleProp, 'w', encoding='UTF-8')
                f.write(content)
                f.close()
    os._exit(errcode)
