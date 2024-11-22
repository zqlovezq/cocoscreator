#coding=utf-8
import os,hashlib,sqlite3,datetime,shutil
import sys

input_dir = ".\\audio\\src"
output_dir = ".\\audio\\dst"

def Main():
    global input_dir
    if len(sys.argv) > 1:
        input_dir = sys.argv[1]
    print(input_dir)

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        

    for(root,_,files) in os.walk(input_dir):
        for filename in files:
            filenameSplit = os.path.splitext(filename)
            fileext = filenameSplit[1]
            if (fileext == ".wav"):
                path = os.path.join(root,filename)
                outputFile = os.path.join(output_dir, filenameSplit[0] + ".mp3")
                cmd = "ffmpeg -i {} {}".format(path, outputFile)
                print(cmd)
                os.system(cmd)
Main()