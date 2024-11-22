# -*- coding: utf-8 -*-

import sys
import re
import json
import os.path
import shutil
import hashlib
from md5 import md5
from functools import partial
#import os.path.exists as isExist
from os.path import exists as isExist

# current_directory = sys.argv[1]
# old_directory = sys.argv[2]
# dest_directory = sys.argv[3]

#原始版本目录
CLIENT_DIR1 =  sys.argv[2]

#当前版本目录
CLIENT_DIR2 = sys.argv[1]

#当前客户端版本号
CLIENT_VERSION = '1.0'

#flist文件名
FLIST_NAME = 'flist.json'

#差异目录
DELTA_DIR =  sys.argv[3]




def md5sum(filename):
    fd = open(filename, 'r')
    '''
    fcount = fd.read()
    fd.close()
    return hashlib.md5(fcount).hexdigest()
    '''
    with open(filename, 'rb') as f:
        m = hashlib.md5()
        for buf in iter(partial(f.read, 1024), b''):
            m.update(buf)
    return m.hexdigest()


def fun(args, dirname, filename):
    if re.search(r'\.svn', dirname):
        return 
    flist = args
    # print '---', dirname
    for file in filename:
        file_name2 = os.path.join(dirname, file)
        if os.path.isfile(file_name2):
            md5_file2 = md5sum(file_name2)
            size_file2 = os.path.getsize(file_name2)
            #print os.path.getmtime(file_name2)
            file_name1 = file_name2.replace(CLIENT_DIR2, CLIENT_DIR1)
            if not isExist(file_name1) or md5sum(file_name1) != md5_file2:
                # print 'File', file_name2, md5_file2, size_file2
                
                #new_file_name = os.path.join(DELTA_DIR, file_ex)
                new_file_dir = dirname.replace(CLIENT_DIR2, DELTA_DIR)
                if not isExist(new_file_dir):
                    os.makedirs(new_file_dir)
                new_file_name = file_name2.replace(CLIENT_DIR2, DELTA_DIR)
                shutil.copy(file_name2, new_file_name)
                
                dir_name, base_name = os.path.split(CLIENT_DIR2)
                path = file_name2.replace(CLIENT_DIR2, base_name)
                #new_file_d = {'name': file_ex, 'code': md5_file2, 'size': size_file2, 'path': path.replace('\\', '/')}
                #print new_file_d
                #flist['stage'].append(new_file_d)



   
if __name__ == '__main__':
    flist = {
        'ver' : CLIENT_VERSION,
        'stage' : [],
    }
  
    if not isExist(CLIENT_DIR1) or not isExist(CLIENT_DIR2):
        print 'Dir not exist'
        #tkMessageBox.showerror('###Warning###', '初始版本路径或者当前版本路径不存在!')
        sys.exit()

    if isExist(DELTA_DIR):
        shutil.rmtree(DELTA_DIR)
    #os.mkdir(DELTA_DIR)
    os.makedirs(DELTA_DIR)
    
    os.path.walk(CLIENT_DIR2, fun, flist)
    #print flist

    
    #fp = open(FLIST_NAME, 'w')
    #fp.write(json.dumps(flist, indent=4, ensure_ascii = False))
    #fp.close()

    
