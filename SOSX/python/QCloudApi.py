#coding=utf-8
from tencentcloud.common import credential
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
import argparse, datetime, os

secretId = "AKIDsuHQlHeaplkvZfMpuZLmf8Q24w8rxvtq"
secretKey = "Iy0rcBinB77IVmxDHEzsgqR533CIoChR"
domain = "https://swzz-1251003022.file.myqcloud.com/sosx/remote"

def DescribePurgeQuota():
    from tencentcloud.cdn.v20180606 import cdn_client, models
    try:
        cred = credential.Credential(secretId, secretKey)
        client = cdn_client.CdnClient(cred, "ap-beijing")
        req = models.DescribePurgeQuotaRequest()
        resp = client.DescribePurgeQuota(req)
        print(resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)

def DescribePurgeTasks():
    from tencentcloud.cdn.v20180606 import cdn_client, models
    try:
        cred = credential.Credential(secretId, secretKey)
        client = cdn_client.CdnClient(cred, "ap-beijing")
        req = models.DescribePurgeTasksRequest()

        # params = '''{
        #     "StartTime":"2020-04-25 00:00:00",
        #     "EndTime": "2020-04-30 12:00:00"
        # }'''
        # req.from_json_string(params)
        req.StartTime = datetime.datetime.now().strftime('%Y-%m-%d 00:00:00')
        req.EndTime = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        resp = client.DescribePurgeTasks(req)
        print(resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)

def DescribePushQuota():
    from tencentcloud.cdn.v20180606 import cdn_client, models
    try:
        cred = credential.Credential(secretId, secretKey)
        client = cdn_client.CdnClient(cred, "ap-beijing")
        req = models.DescribePushQuotaRequest()
        resp = client.DescribePushQuota(req)
        print(resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)
        
def PushUrlsCacheFromFile(file):
    # 读新的哪些文件需要push
    if not os.path.exists(file):
        return
    pushfiles = []
    finput = open(file, "r")
    for line in finput.readlines():
        line = line.strip()
        if os.path.splitext(line)[1] == ".html" or line == "":
            continue
        url = domain + "/" + line
        pushfiles.append(url)
        print(url)
    finput.close()
    # print(pushfiles)
    if len(pushfiles) == 0:
        return

    counter = 0
    while counter < len(pushfiles):
        delta = 20
        if len(pushfiles) - counter < delta:
            delta = len(pushfiles) - counter

        PushUrlsCache(pushfiles[counter:counter+delta])
        counter += delta

def PushUrlsCache(pushfiles):
    # print(pushfiles)
    from tencentcloud.cdn.v20180606 import cdn_client, models
    try:
        cred = credential.Credential(secretId, secretKey)
        client = cdn_client.CdnClient(cred, "ap-beijing")
        req = models.PushUrlsCacheRequest()
        req.Urls = pushfiles
        resp = client.PushUrlsCache(req)
        print(resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)
        
def PurgeUrlsCache(urls):
    # print(urls)
    from tencentcloud.cdn.v20180606 import cdn_client, models
    try:
        cred = credential.Credential(secretId, secretKey)
        client = cdn_client.CdnClient(cred, "ap-beijing")
        req = models.PurgeUrlsCacheRequest()
        req.Urls = urls
        resp = client.PurgeUrlsCache(req)
        print(resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)

def DescribePushTasks():
    from tencentcloud.cdn.v20180606 import cdn_client, models
    try:
        cred = credential.Credential(secretId, secretKey)
        client = cdn_client.CdnClient(cred, "ap-beijing")
        req = models.DescribePushTasksRequest()

        # params = '''{
        #     "StartTime":"2020-04-25 00:00:00",
        #     "EndTime": "2020-04-30 12:00:00"
        # }'''
        # req.from_json_string(params)
        req.StartTime = datetime.datetime.now().strftime('%Y-%m-%d 00:00:00')
        req.EndTime = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        resp = client.DescribePushTasks(req)
        print(resp.to_json_string())
    except TencentCloudSDKException as err:
        print(err)

def main():
    parser = argparse.ArgumentParser(description="腾讯云api")
    parser.add_argument('-a','--api', default='quota', help='可用api:quota,push,check')
    parser.add_argument('-u','--urls', default='', help='刷新或预热的url，用逗号分隔')
    parser.add_argument('-f','--file', default='', help='刷新或预热的url列表文件')
    args = parser.parse_args()
    print(args)
    if args.api == 'quota':
        #查询剩余预热条数
        DescribePushQuota() 
    elif args.api == 'push':
        #预热
        if args.urls != '':
            PushUrlsCache(args.urls.split(','))
        else:
            PushUrlsCacheFromFile(args.file)
    elif args.api == 'check':
        #查询预热进度
        DescribePushTasks()
    elif args.api == 'purge_quota':
        #查询刷新剩余条数
        DescribePurgeQuota()
    elif args.api == 'purge_check':
        DescribePurgeTasks()
    elif args.api == 'purge':
        PurgeUrlsCache(args.urls.split(','))

if __name__ == '__main__' :
    main()