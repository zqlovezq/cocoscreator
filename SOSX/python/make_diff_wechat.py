#coding=utf-8
import os, datetime, shutil, math, fileinput, sys, zipfile, filecmp, hashlib, tarfile
from datetime import datetime

new_dir = "..\\build\\wechatgame\\remote"
old_dir = "..\\build\\remote_old"
hotfix_root = "..\\build\\remote-diff"
diff_file = "..\\build\\remote-diff.tar.gz"

def print_diff_files(dcmp):
    list_cmp = []
    for name in dcmp.diff_files:
        # print "diff_file %s found in %s and %s" % (name, dcmp.left,dcmp.right)
        list_cmp.append(os.path.join(dcmp.left, name))
    for name in dcmp.funny_files:
        # print "funny_files %s found in %s and %s" % (name, dcmp.left,dcmp.right)
        list_cmp.append(os.path.join(dcmp.left, name))
    for name in dcmp.left_only:
        # print "left_only %s found in %s" % (name, dcmp.left)
        list_cmp.append(os.path.join(dcmp.left, name))
    # for name in dcmp.right_only:
    # print "right_only %s found in %s" % (name, dcmp.right)
    for sub_dcmp in dcmp.subdirs.values():
        list_cmp += print_diff_files(sub_dcmp)
    return list_cmp

def compare_with(newpath, oldpath):
    root_left = newpath
    root_right = oldpath

    print ("compare %s with %s" % (root_left, root_right))
    file_cmp = filecmp.dircmp(root_left, root_right)
    list_cmp_ret = print_diff_files(file_cmp)
    # print(list_cmp_ret)
    if os.path.exists(hotfix_root):
        # shutil.rmtree(hotfix_root)
        os.system("rd /s /q %s 1>nul 2>nul" % (hotfix_root))
    for i in range(0, len(list_cmp_ret)):
        hotfix_path = list_cmp_ret[i].replace(root_left, hotfix_root, 1)
        hotfix_dir = os.path.dirname(hotfix_path)
        if not os.path.exists(hotfix_dir):
            os.makedirs(hotfix_dir)
        # shutil.copy(list_cmp_ret[i], hotfix_dir)
        if os.path.isdir(list_cmp_ret[i]):
            print ("xcopy %s %s /e /s /i /y 1>nul" % (list_cmp_ret[i], hotfix_path))
            os.system("xcopy %s %s /e /s /i /y 1>nul" % (list_cmp_ret[i], hotfix_path))
        else:
            hotfix_filename = os.path.basename(hotfix_path)
            fileext = os.path.splitext(hotfix_filename)[1]
            print ("xcopy %s %s /e /s /h /y 1>nul" % (list_cmp_ret[i], hotfix_dir))
            os.system("xcopy %s %s /e /s /h /y 1>nul" % (list_cmp_ret[i], hotfix_dir))
			
if len(sys.argv) > 1:
    old_dir = sys.argv[1]
print(old_dir)
if len(sys.argv) > 2:
    hotfix_root = sys.argv[2]
print(hotfix_root)
if len(sys.argv) > 3:
    diff_file = sys.argv[3]
print(diff_file)

if len(sys.argv) > 4:
    new_dir = sys.argv[4]

if not os.path.exists(old_dir):
    os.mkdir(old_dir)
    
if not os.path.exists(new_dir):
    sys.exit(1)
   
if os.path.exists(diff_file):
    os.system("rd /s /q %s 1>nul 2>nul" % (diff_file))

print ("diff img begin...")
compare_with(new_dir, old_dir)

if os.path.exists(hotfix_root):
    with tarfile.open(diff_file, "w:gz") as tar:
	    tar.add(hotfix_root+"/", arcname=os.path.basename(hotfix_root+"/"))
    
        
#new_dir复制到old_dir
os.system("xcopy %s %s /e /s /i /y 1>nul" % (new_dir, old_dir))
os.system("rd /s /q %s 1>nul 2>nul" % (new_dir))

print ("diff img end...")

#os.system("pause")