# -*- coding: UTF-8 -*- 
import os, sys, shutil

# key_file: 	密钥文件路径
# host_key: 	服务器指纹
# ip:			服务器地址
# user:			服务端登录用户名
# local_path:	待上传文件路径（绝对路径）
# remote_path:	服务器路径（绝对路径）

# 本地临时文件名
LOCAL_TAR_NAME = '__temp_20230512_chutz__.tar'

def Upload(key_file, host_key, ip, user, local_path, remote_path):
	print('===============================')
	print('key_file ' + key_file)
	print('host_key ' + host_key)
	print('ip ' + ip)
	print('user ' + user)
	print('local_path ' + local_path)
	print('remote_path ' + remote_path)

	PackFiles(local_path)
	UploadTar(key_file, host_key, ip, user, local_path, remote_path)
	UnpackRemoteTar(key_file, host_key, ip, user, remote_path)
	RemoveTemporaryFiles(key_file, host_key, ip, user, local_path, remote_path)



# 打包
def PackFiles(local_path):
	print('packing ' + local_path)
	tar_path = local_path + '/../' + LOCAL_TAR_NAME
	print('packing ' + local_path +'---' + tar_path)
	if os.path.exists(tar_path):
		os.remove(tar_path)
	cmd = 'cd ' + local_path + '&&tar -zcvf ' + tar_path + ' *'
	os.system(cmd)

# 上传压缩包
def UploadTar(key_file, host_key, ip, user, local_path, remote_path):
	print('uploading ' + local_path + '/../' + LOCAL_TAR_NAME)
	cmd = 'pscp -hostkey '
	cmd += host_key
	cmd += ' -i ' + key_file + ' '
	cmd += local_path +"/../" + LOCAL_TAR_NAME
	cmd += ' ' + user + '@' + ip + ':' + remote_path
	os.system(cmd)

# 远端执行命令
def DoRemoteCmd(key_file, host_key, ip, user, remote_cmd):
	cmd = 'plink'
	cmd += ' -batch -hostkey ' + host_key
	cmd += ' -i ' + key_file
	cmd += ' ' + user + '@' + ip
	cmd += ' ' + remote_cmd
	os.system(cmd)

# 解压
def UnpackRemoteTar(key_file, host_key, ip, user, remote_path):
	print('remote unpacking...')
	cmd = 'tar -zxf ' + remote_path + '/' + LOCAL_TAR_NAME + ' -C ' + remote_path
	DoRemoteCmd(key_file, host_key, ip, user, cmd)

# 移除临时文件
def RemoveTemporaryFiles(key_file, host_key, ip, user, local_path, remote_path):
	tar_path = local_path + '/../' + LOCAL_TAR_NAME
	print('removing temporary files...' + tar_path)
	if os.path.exists(tar_path):
		os.remove(tar_path)
	# for name in os.listdir(local_path):
	# 	file_path = local_path + '/' + name
	# 	if os.path.isdir(file_path):
	# 		shutil.rmtree(file_path)
	# 	else:
	# 		os.remove(file_path)
	cmd = 'rm  -f ' + remote_path + '/' + LOCAL_TAR_NAME
	DoRemoteCmd(key_file, host_key, ip, user, cmd)

# Upload(sys.path[0]+'/../ppk/43.138.156.95.ppk', '3b:ba:b4:aa:40:81:72:02:3a:92:98:71:b3:b4:14:24', '43.138.156.95', 'root', sys.path[0]+'/../temp', '/usr/share/nginx/html/wegame/remote')

Upload(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5],sys.argv[6])