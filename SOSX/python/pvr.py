import os,gzip,shutil,subprocess,platform

convert = ".\\convert.exe"
PVRTexToolCLI = ".\\PVRTexToolCLI.exe"
if platform.system() != "Windows":
    convert = "./convert"
    PVRTexToolCLI = "./PVRTexToolCLI"

potLen = []
i = 1
while i <= 4096:
    potLen.append(i)
    i *= 2

def getPotLength(length):
    i = 0
    while i < len(potLen):
        if potLen[i] >= length:
            return potLen[i]
        i += 1
    return -1
    
def CompressFile(filepath, dstfile, toolsDir):
    # print("{}, {}".format(filepath, toolsDir))
    if os.path.splitext(filepath)[1] == ".jpg":
        cmd = "cd {} && PVRTexToolCLI -i {} -o {} -squarecanvas -potcanvas -q pvrtcbest -f PVRTC1_2_RGB,UBN,lRGB".format(toolsDir, filepath, dstfile)
        if os.system(cmd) == 0:
            return GzipFile(dstfile)
    else:
        potRealLen = -1
        width = 0
        result = os.popen("cd {} && {} {} -print %w,%h tmp.ppm".format(toolsDir, convert, filepath)) 
        try:
            data = result.readline().split(",")
            #print(data)
            width = int(data[0])
            height = int(data[1])
            potXLen = getPotLength(width)
            potYLen = getPotLength(height)
            potRealLen = potYLen
            if potYLen < potXLen/2:
                potRealLen = potXLen/2
            if potRealLen == -1:
                return False
        except:
            return False

        cmd = "cd {} && {} {} -alpha extract alpha.pgm".format(toolsDir, convert, filepath)
        if os.system(cmd) != 0:
            return False
        cmd = "cd {} && {} -size {}x{} -strip -colors 1024 -depth 24 xc:none tmp.ppm -geometry +0+0 -composite alpha.pgm -geometry +0+{} -composite temp.png 2>nul".format(toolsDir, convert, width, potRealLen*2, potRealLen)
        if os.system(cmd) != 0:
            return False
        cmd = "cd {} && {} -i temp.png -o {} -squarecanvas -potcanvas -q pvrtcbest -f PVRTC1_4_RGB,UBN,lRGB".format(toolsDir, PVRTexToolCLI, dstfile)
        if os.system(cmd) == 0:
            return GzipFile(dstfile)
    
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
    
if __name__ == "__main__":
    CompressFile("C:/Users/sp/Documents/cy/Client_ts/python/img/src/0b7fb117-c8c4-4f8b-8b6f-7f238ff906f2.png", "C:/Users/sp/Documents/cy/Client_ts/python/img/dst/1.pvr", "tmp/0/compress_tools")
