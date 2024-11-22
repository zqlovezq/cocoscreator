import os,json,shutil,argparse,hashlib,platform,threading,multiprocessing
from concurrent.futures import ThreadPoolExecutor,wait
import tinypng, optipng, etc1, pvr, write_texture_formats
from whitelist import WhiteList

from configparser import ConfigParser
config = ConfigParser()
config.read('version_config.ini', encoding='utf-8')

src_dir = os.path.join(config.get("DEFAULT", "jsb_root"), "assets")
dst_dir = src_dir
cache_dir = "cache"
tools_dir = "compress_tools"
tmp_dir = "tmp"
compress_type = "png"
md5_dict = {}
tid_list = []
thread_count = multiprocessing.cpu_count()
extentions = [".png", ".jpg"]

whitelist_file = ""
blacklist_file = ""
wl = None #白名单
bl = None #黑名单
    
def InitTmpDir(count):
    if not os.path.exists(tmp_dir):
        os.makedirs(tmp_dir)
    for i in range(count):
        sub_dir = os.path.join(tmp_dir, str(i))
        if not os.path.exists(sub_dir):
            os.makedirs(sub_dir)
            shutil.copytree(tools_dir, os.path.join(sub_dir, tools_dir))

def InitMd5Dict():
    global md5_dict
    file = os.path.join(src_dir, "md5dict.json")
    if os.path.exists(file):
        with open(file, 'r') as fread:
            md5_dict = json.load(fread)
    else:
        for(root,_,files) in os.walk(src_dir):
            for filename in files:
                fileext = os.path.splitext(filename)[1]
                if (fileext == ".png" or fileext == ".jpg"):
                    if len(filename.split(".")) == 2:
                        #只计算没有md5的文件
                        filepath = os.path.join(root, filename)
                        md5_dict[filename] = GetMd5(filepath)
        with open(file, 'w') as fwrite:
            fwrite.write(json.dumps(md5_dict))

def GetMd5(path):
    with open(path, 'rb') as fread:
        fmd5 = hashlib.md5(fread.read())
        return fmd5.hexdigest()[0:5]
        
def GetIdxByThreadID():
    idx = 0
    tid = threading.currentThread().ident
    try:
        idx = tid_list.index(tid)
    except:
        tid_list.append(tid)
        idx = len(tid_list) - 1
    return idx
    
def HandleFile(filename, dir):
    # print("handle file: {}".format(filename))
    needCompress = True
    if bl != None and not bl.IsInList(filename):
        #有黑名单，并且文件不在黑名单里面
        # print("not in whitelist: {}".format(filename))
        needCompress = False
    elif wl != None and wl.IsInList(filename):
        #在白名单中
        # print("in whitelist: {}".format(filename))
        needCompress = False
            
    if needCompress:
        CheckCacheFile(filename, dir, compress_type)
    elif os.path.splitext(filename)[1] == ".png":
        #png进行无损压缩
        CheckCacheFile(filename, dir, "optipng")


def CheckCacheFile(filename, dir, compressType):
    # print("check file:{} {}".format(compressType, filename))
    cacheDir = os.path.join(cache_dir, compressType)
    if not os.path.exists(cacheDir):
        os.makedirs(cacheDir) 
        
    filepath = os.path.join(dir, filename)
    splits = filename.split(".")
    length = len(splits)
    md5file = ""
    if length == 3:
        #认为已有md5
        md5file = filename
        pass
    elif length == 2: 
        #计算md5
        md5str = ""
        if filename in md5_dict:
            md5str = md5_dict[filename]
        else:
            md5str = GetMd5(filepath)
        md5file = splits[0] + "." + md5str + "." + splits[1]
    else:
        print("filename format error: {}".format(filename))
        return False
    
    dstfile = filepath
    if src_dir != dst_dir:
        dstfile = filepath.replace(src_dir, dst_dir)
    cachedfile = os.path.join(cacheDir, md5file)
    
    #根据压缩类型修改目标文件扩展名
    if compressType == "etc1":
        dstfile = os.path.splitext(dstfile)[0] + ".pkm"
        cachedfile = os.path.splitext(cachedfile)[0] + ".pkm"
    elif compressType == "pvr":
        dstfile = os.path.splitext(dstfile)[0] + ".pvr"
        cachedfile = os.path.splitext(cachedfile)[0] + ".pvr"
    
    if os.path.exists(cachedfile):
        #有缓存
        shutil.copy2(cachedfile, dstfile)
    else:
        #没有缓存需要压缩
        if not CompressFile(filepath, cachedfile, dstfile, compressType):
            #压缩失败
            print("CompressFile FAILED: {}".format(filepath))
            return False
            
    if compressType != "png" and compressType != "optipng":
        #如果压缩类型不是png，那么还需要将dstfile目录中的png移除
        dstPng = os.path.splitext(dstfile)[0] + ".png"
        if os.path.exists(dstPng):
            os.remove(dstPng)
    return True

def CompressFile(filepath, cachedfile, dstfile, compressType):
    print("compress file:{} {}".format(compressType, filepath))
    
    absSrcFile = os.path.abspath(filepath)
    tmpSubDir = os.path.join(os.path.join(tmp_dir, str(GetIdxByThreadID())))
    tmpfile = os.path.abspath( os.path.join(tmpSubDir, os.path.basename(dstfile)) )
    tools = os.path.join(tmpSubDir, tools_dir)
    
    result = False
    if compressType == "png":
        result = tinypng.CompressFile(absSrcFile, tmpfile)
    elif compressType == "optipng":
        result = optipng.CompressFile(absSrcFile, tmpfile, tools)
    elif compressType == "etc1":
        result = etc1.CompressFile(absSrcFile, tmpfile, tools)
    elif compressType == "pvr":
        result = pvr.CompressFile(absSrcFile, tmpfile, tools)
    
    if result and os.path.exists(tmpfile):
        #压缩成功，把临时文件拷贝到目标目录和缓存目录
        shutil.copy2(tmpfile, cachedfile)
        shutil.copy2(tmpfile, dstfile)
        os.remove(tmpfile)
        return True
    else:    
        return False
        
def WorkInMainThread():
    InitTmpDir(1)
    for dir in filter(lambda x : x != 'internal', os.listdir(src_dir)):
        dirpath = os.path.join(src_dir, dir)
        if os.path.isdir(dirpath):
            for(root,_,files) in os.walk(dirpath):
                for filename in filter(lambda x : os.path.splitext(x)[1] in extentions, files):
                    HandleFile(filename, root)
    
    
def WorkInThreadPool():
    InitTmpDir(thread_count)
    allTask = []
    index = 0
    executor = ThreadPoolExecutor(max_workers=thread_count)
    for dir in filter(lambda x : x != 'internal', os.listdir(src_dir)):
        dirpath = os.path.join(src_dir, dir)
        if os.path.isdir(dirpath):
            for(root,_,files) in os.walk(dirpath):
                for filename in filter(lambda x : os.path.splitext(x)[1] in extentions, files):
                    index += 1
                    task = executor.submit(HandleFile, filename, root)
                    allTask.append(task)
    wait(allTask)

def main():
    global wl , bl
    if os.path.exists(whitelist_file):
        wl = WhiteList(whitelist_file)
        # wl.Display()
    if os.path.exists(blacklist_file):
        bl = WhiteList(blacklist_file)
        # bl.Display()
        
    InitMd5Dict()
    # WorkInMainThread()
    WorkInThreadPool()
    write_texture_formats.Start(src_dir)
    print("Done.")
    

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-s', '--src', required=False, help='path to src files')
    parser.add_argument('-d', '--dst', required=False, help='path to dst files')
    parser.add_argument('-c', '--cache', required=False, help='path to cached files')
    parser.add_argument('-j', required=False, help='worker thread count')
    parser.add_argument('-t', '--type', required=True, choices=["png", "optipng", "etc1", "pvr"], help='compress type [png,optipng,etc1,pvr]')
    parser.add_argument('-w', '--whitelist', required=False, help='whitelist file path')
    parser.add_argument('-b', '--blacklist', required=False, help='blacklist file path')
    args = parser.parse_args()
    print(args)
    if args.src != None:
        src_dir = args.src
    if args.dst != None:
        dst_dir = args.dst
    if args.cache != None:
        cache_dir = args.cache
    if args.type != None:
        compress_type = args.type
    if args.j != None:
        thread_count = int(args.j)
    if args.whitelist != None:
        whitelist_file = args.whitelist
    if args.blacklist != None:
        blacklist_file = args.blacklist
        
    main()