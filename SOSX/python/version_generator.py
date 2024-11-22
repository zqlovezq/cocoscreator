import os,shutil,argparse,re
from configparser import ConfigParser
config = ConfigParser()
config.read('version_config.ini', encoding='utf-8')

def ConvertVersion(version):
    verSplit = version.split(".");
    verInt = 0
    verStep = 1000
    for i in range(len(verSplit)):
        step = pow(verStep, len(verSplit) - 1 - i)
        v = int(verSplit[i]) * step
        # print(v)
        verInt += v
    return str(verInt);
    
def modifyCpp(root, mainJs):
    cppPath = os.path.join(root, "frameworks/runtime-src/Classes/AppDelegate.cpp")
    
    fread = open(cppPath, 'r')
    content = fread.read()
    fread.close()
    
    matchRet = re.search("\"\S*main\S*\.js\"", content)
    if matchRet == None:
        print('cannot find mainjs in cpp')
    else:
        print(content[matchRet.span()[0]:matchRet.span()[1]])
        newContent = content[ 0 : matchRet.span()[0] ] + "\"" + mainJs + "\"" + content[ matchRet.span()[1]: ]
        f = open(cppPath, 'w')
        f.write(newContent)
        f.close()
        # print(newContent)
    
def main(channel):
    output = "remote_assets"
    if channel != "DEFAULT":
        output += "_" + channel
    jsb_root = config.get(channel, "jsb_root")
    url = config.get(channel, "url")
    version = config.get(channel, "version")
    verInt = ConvertVersion(version)
    
    # print(jsb_root)
    # print(url)
    # print(version)
    # print(verInt)
    
    #modify main.js
    main_js = os.path.join(jsb_root, "main.js")
    if os.path.exists(main_js):
        newFile = "assets/main." + verInt + ".js"
        newFilePath = os.path.join(jsb_root, newFile)
        shutil.copy2(main_js, newFilePath)
        modifyCpp(jsb_root,newFile)

    if os.path.exists(output):
        shutil.rmtree(output)
        
    manifest = os.path.join(jsb_root, "assets/project.manifest")
    if os.path.exists(manifest):
        os.remove(manifest)

    cmd = "node version_generator.js -v {} -u {} -s {} -d {}".format(version, url, jsb_root, output)
    print (cmd)

    if os.system(cmd) == 0:
        shutil.copytree(os.path.join(jsb_root, "assets"), os.path.join(output, "assets"))
        shutil.copytree(os.path.join(jsb_root, "src"), os.path.join(output, "src"))
        shutil.copy2(os.path.join(output, "project.manifest"), manifest)
    else:
        os._exit(1)
        
        
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-c', '--channel', required=False, help='channel name')
    args = parser.parse_args()
    print(args)
    if args.channel != None:
        channel = args.channel
    else:
        channel = "DEFAULT"
    main(channel)