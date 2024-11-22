import os,gzip,shutil

def CompressFile(filepath, dstfile, toolsDir):
    cmd = "cd {} && optipng -o3 {} -clobber -out {}".format(toolsDir, filepath, dstfile)
    if os.system(cmd) == 0:
        return True
    return False