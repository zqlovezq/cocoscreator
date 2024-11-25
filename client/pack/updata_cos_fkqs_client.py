# -*- coding=utf-8
# appid 已在配置中移除,请在参数 Bucket 中带上 appid。Bucket 由 BucketName-APPID 组成
# 1. 设置用户配置, 包括 secretId，secretKey 以及 Region
import os
from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client
import sys
import logging
import shutil

bucket_user_id = 'AKIDXxBC0az9PTL3av5EG4gAQdiaikbFh5JK'
bucket_cos_user_key = '0vhGeqoYGl4DAPYXLxMabPzQn251vmV4'
bucket_cos_region = 'ap-beijing'
bucket_cos_name = 'zoc-1300944069'
qclou_file_path = 'wxdmx_client'
cdn_domain = 'zoc.52playgame.com'

def main():
    uploadDir = sys.argv[1]
    if not os.path.isdir(uploadDir):
        print("not dir")
        return

    # uploadDir = "./test-upload"
    tempZipFile = uploadDir+".zip"
    shutil.make_archive(uploadDir, 'zip', uploadDir)

    basename = os.path.basename(uploadDir)
    bucket_file_all = qclou_file_path + "/" + basename+".zip"

    logging.basicConfig(level=logging.WARNING, stream=sys.stdout)

    secret_id = bucket_user_id      # 替换为用户的 secretId
    secret_key = bucket_cos_user_key      # 替换为用户的 secretKey
    region = bucket_cos_region     # 替换为用户的 Region
    token = None                # 使用临时密钥需要传入 Token，默认为空，可不填
    scheme = 'https'            # 指定使用 http/https 协议来访问 COS，默认为 https，可不填

    domain = cdn_domain

    config = CosConfig(Region=region, SecretId=secret_id, SecretKey=secret_key, Token=token, Scheme=scheme, Domain=domain, SignHost=False)
    # 2. 获取客户端对象
    client = CosS3Client(config)
    # 3. 高级上传接口
    ##上传全量包
    response = client.upload_file(
        Bucket=bucket_cos_name, 
        LocalFilePath=tempZipFile,
        Key=bucket_file_all,
        PartSize=10,
        MAXThread=10,
        EnableMD5=False
    )

    # 生成上传 URL，未限制请求头部和请求参数
    url = client.get_presigned_url(
        Method='GET',
        Bucket=bucket_cos_name,
        Key=bucket_file_all,
        Expired=2400  # 120秒后过期，过期时间请根据自身场景定义
    )
    print(url)

if __name__ == "__main__":
    main()