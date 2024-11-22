#coding=utf-8
import os, json, sys
import uuid_utils
import hashlib

from configparser import ConfigParser
config = ConfigParser()
config.read('version_config.ini', encoding='utf-8')

assets_dir = os.path.join(config.get("DEFAULT", "jsb_root"), "assets")
modifyCount = 0

def findFile(dir, key):
    files = os.listdir(dir)
    for file in files:
        if file.startswith(key):
            return os.path.join(dir, file)
    return ""


def getFormats(dir, key):
    hasPng = False
    hasPkm = False
    hasPvr = False
    hasJpg = False

    files = os.listdir(dir)
    for file in files:
        if file.startswith(key):
            # print(file)
            ext = os.path.splitext(file)[1]
            if ext == ".png":
                hasPng = True
            elif ext == ".pkm":
                hasPkm = True
            elif ext == ".pvr":
                hasPvr = True
            elif ext == ".jpg":
                hasJpg = True
    
    #['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.pvr', '.pkm']
    typeArray = []
    if hasPng:
        typeArray.append("0")
        if hasPvr:
            #1025: "RGB_A_PVRTC_4BPPV1"
            typeArray.append("5@1025")
        if hasPkm:
            #1026: "RGBA_ETC1"
            typeArray.append("6@1026")
    elif hasJpg:
        typeArray.append("1")
        if hasPvr:
            #8: "RGB_PVRTC_4bits"
            typeArray.append("5@5")
        if hasPkm:
            #4: "RGB_ETC1"
            typeArray.append("6@4")
    else:
        if hasPvr:
            #1025: "RGB_A_PVRTC_4BPPV1"
            typeArray.append("5@1025")
        if hasPkm:
            #1026: "RGBA_ETC1"
            typeArray.append("6@1026")
    
    return "_".join(typeArray)
            
def modifyTextureJson(importDir, nativeDir):
    global modifyCount
    for(root,_,files) in os.walk(importDir):
        for filename in files:
            if os.path.splitext(filename)[1] == ".json":
                jsonFile = os.path.join(root, filename)
                fread = open(jsonFile, 'r', encoding='utf-8')
                content = json.load(fread)
                fread.close()
                if isinstance(content,list):
                    if len(content) > 5 and isinstance(content[3],list) and content[3][0] == "cc.Texture2D":
                        # print(jsonFile)
                        # print(content[5][0])
                        formatsArray = content[5][0].split(",")
                        uuid = filename.split(".")[0]
                  
                        #查看纹理都有什么格式
                        formats = getFormats(os.path.join(nativeDir, uuid[0:2]), uuid)
                        # print(formats)
                        if formats != formatsArray[0]:
                            modifyCount += 1
                            formatsArray[0] = formats
                            content[5][0] = ','.join(formatsArray)
                            # print(content)
                            with open(jsonFile, 'w') as fWriteConfig:
                                json.dump(content, fWriteConfig)
                                print('modify: {}'.format(jsonFile))

def modifyBundle(path):
    global modifyCount
    files = os.listdir(path)
    importDir = os.path.join(path, "import")
    nativeDir = os.path.join(path, "native")
    for file in files:
        if os.path.splitext(file)[1] == ".json" and file.find("config") >=0 :
            configFile = os.path.join(path, file)
            # print(configFile)

            with open(configFile, 'r', encoding='utf-8') as fread:
                needModifyConfig = False
                content = json.load(fread)
                if 'packs' in content:
                    data = content['packs']
                    if not isinstance(data,list):
                        modifyTextureJson(importDir, nativeDir)
                        return
                    for pack in data:
                        #读取pack对应的json
                        packdir = os.path.join(importDir, pack[0:2])
                        packfilename = findFile(packdir, pack)
                        if os.path.exists(packfilename):
                            newPackfilename = packfilename
                            with open(packfilename, 'r', encoding='utf-8') as freadPack:
                                needSave = False
                                packData = json.load(freadPack)
                                if "type" in packData and packData["type"] == "cc.Texture2D":
                                    # print(packfilename)
                                    textureArray = packData["data"].split('|')
                                    for i in range(len(textureArray)):
                                        #找到纹理uuid和格式的关联
                                        compressedUUID = data[pack][i]
                                        if isinstance(compressedUUID, int):
                                            compressedUUID = content['uuids'][compressedUUID]
                                        uuid = uuid_utils.decodeUuid(compressedUUID)
                                        # print("{} = {}".format(uuid, textureArray[i]))

                                        
                                        #查看纹理都有什么格式
                                        formats = getFormats(os.path.join(nativeDir, uuid[0:2]), uuid)
                                        if formats != "":
                                            formatsArray = textureArray[i].split(",")

                                            if formats != formatsArray[0]:
                                                modifyCount += 1
                                                needSave = True
                                                formatsArray[0] = formats
                                                textureArray[i] = ','.join(formatsArray)

                                    if needSave:
                                        #格式有更改，需要保存
                                        packData["data"] = '|'.join(textureArray)
                                        # print(packfilename)
                                        # print(packData)
                                        
                                        # #修改md5
                                        # packfileUUID = os.path.basename(packfilename).split(".")[0]
                                        # if 'versions' in content:
                                            # versions = content['versions']['import']
                                            # ver_len = len(versions)
                                            # for i in range(ver_len):
                                                # if(versions[i] == packfileUUID and i + 1 < ver_len):
                                                    # oldMd5 = versions[i + 1]
                                                    # md5 = hashlib.md5()
                                                    # md5.update(json.dumps(packData).encode('utf-8'))     #注意转码
                                                    # newMd5 = md5.hexdigest()[0:5]
                                                    # # print("{} md5: {}, newMd5: {}".format(packfileUUID, oldMd5, newMd5))
                                                    
                                                    # tempFilename = packfileUUID + '.' + newMd5 + ".json"
                                                    # newPackfilename = os.path.join(os.path.dirname(packfilename), tempFilename)
                                                    # if newPackfilename != packfilename:
                                                        # versions[i + 1] = newMd5
                                                        # needModifyConfig = True
                                                        
                                                    # print('old: {},  new: {}'.format(packfilename, newPackfilename))
                                                    # break
                
                                        with open(newPackfilename, 'w') as fwrite:
                                            json.dump(packData, fwrite)
                                            
                            if newPackfilename != packfilename:
                                os.remove(packfilename)          
                                    
                if needModifyConfig:
                    with open(configFile, 'w') as fWriteConfig:
                        json.dump(content, fWriteConfig)
                    print('modify config: {}\n'.format(configFile))
              


def Start(root):
    #遍历bundle
    dirs = os.listdir(root)
    for file in dirs:
        if file != 'internal':
            path = os.path.join(root, file)
            if os.path.isdir(path):
                print("bundle: " + file + '\n')
                modifyBundle(path)
    print("modified: {}".format(modifyCount))
    
def Main():
    global assets_dir
    if len(sys.argv) > 1:
        assets_dir = sys.argv[1]
    print(assets_dir)
    Start(assets_dir)
 
if __name__ == "__main__":
    Main()