import os,gzip,shutil

def CompressFile(filepath, dstfile, toolsDir):
    dstDir = os.path.dirname(dstfile)
    cmd = "cd {} && etcpack {} {} -c etc1 -s slow -aa".format(toolsDir, filepath, dstDir)
    if os.path.splitext(filepath)[1] == ".jpg":
        cmd = "cd {} && etcpack {} {} -c etc1 -s slow".format(toolsDir, filepath, dstDir)
    print(cmd)
    if os.system(cmd) == 0:
        return GzipFile(dstfile)
    return False
    
def GzipFile(file):
    try:
        gzfile = file + ".gz"
        with open(file, 'rb') as f_in, gzip.open(gzfile, 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)
        os.remove(file)
        shutil.copy2(gzfile, file)
        os.remove(gzfile)
        return True
    except Exception as e:
        print("GzipFile exception: {}".format(str(e)))
    return False
    