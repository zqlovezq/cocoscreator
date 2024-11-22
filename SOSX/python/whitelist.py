import os,sqlite3,shutil,datetime,json

class WhiteList:
    def __init__(self, wlFilename):
        self.__data = set()
        with open(wlFilename, 'r') as fread:
            for line in fread.readlines():
                line = line.strip()
                if(os.path.isdir(line)):
                    files = getMetaFilesInDir(line, True)
                    for file in files:
                        self.__addToWhitelist(file)
                else:
                    self.__addToWhitelist(line) 
                    
    def __addToWhitelist(self, metafile):
        if(os.path.splitext(metafile)[1] != '.meta'):
            # print(metafile)
            metafile = metafile + '.meta'

        if(not os.path.exists(metafile)):
            print('file not exists', metafile)
            return

        with open(metafile, 'r') as fread:
            meta = json.load(fread)
            self.__data.add(meta['uuid'])
            # print(metafile, meta['uuid'])
            
    def IsInList(self, filename):
        index = filename.find('.')
        if(index >= 0):
            filename = filename[:index]
        # if(len(filename) < 20):
        #     print(filename)
        if(filename in self.__data):
            # print(filename)
            return True
        else:
            return False
            
    def Display(self):
        # print(id(self.__data))
        print(self.__data)

def getMetaFilesInDir(dir, recursive):
    if(not os.path.isdir(dir)):
        return

    files = []
    dirs = os.listdir(dir)
    for file in dirs:
        fulldir = os.path.join(dir, file)
        if(os.path.isdir(fulldir)):
            if(recursive):
                files += getMetaFilesInDir(fulldir, True)
        else:
            ext = os.path.splitext(file)[1]
            if(ext == '.meta'):
                files.append(fulldir)
            elif(ext == '.pac'):
                print('this is a pac file in path:', dir)
    return files


if __name__ == "__main__":
    wl = WhiteList("wechat_blacklist.txt")
    print(id(wl))
    wl.Display()
    
    bl = WhiteList("android_whitelist.txt")
    print(id(bl))
    bl.Display()

