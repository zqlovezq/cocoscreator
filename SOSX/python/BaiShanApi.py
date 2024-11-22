import urllib.request, ssl, json, argparse, os

token = "83432ef10a88f2e8a2483995ce239f1b"
context = ssl._create_unverified_context()
time_out = 60

def PushUrlsCacheFromFile(file, domain):
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
        delta = 200
        if len(pushfiles) - counter < delta:
            delta = len(pushfiles) - counter

        PushUrlsCache(pushfiles[counter:counter+delta])
        counter += delta
        
def PushUrlsCacheFromDir(dir, domain):
    files = os.listdir(dir)
    for file in files:
        path = os.path.join(dir, file)
        print(path)
        PushUrlsCacheFromFile(path, domain)
        
def PushUrlsCache(pushfiles):
    # print(pushfiles)
    url = 'https://cdn.api.baishan.com/v2/cache/prefetch?token={}'.format(token)
    # print(url)
    req = urllib.request.Request(url, method="POST")
    req.add_header('Content-Type', 'Content-Type: application/json')

    # data = '{"urls":["https://cdn-swzz.akbing.com/swzz/remote/main/config.89ced.json"]}'
    data = {}
    data['urls'] = pushfiles
    jsonData = json.dumps(data)
    # print(jsonData)
    with urllib.request.urlopen(req, jsonData.encode('utf-8'), time_out, context=context) as f:
        rspContent = f.read().decode('utf-8')
        rsp = json.loads(rspContent)
        print(rsp)
        with open("./cdn_tasks.txt", 'a', encoding='utf8') as fwrite:
            fwrite.write(rspContent+"\n")
        
def CheckPushByTaskID(taskID):
    url = 'https://cdn.api.baishan.com/v2/cache/prefetch?token={}&task_id={}'.format(token, taskID)
    with urllib.request.urlopen(url, context=context) as f:
        rsp = json.loads(f.read().decode('utf-8'))
        print(rsp)
        
def QueryDomainConfig(domain):
    url = 'https://cdn.api.baishan.com/v2/stat/originRequest/eachDomain?token={}&domains={}'.format(token, domain)
    with urllib.request.urlopen(url, context=context) as f:
        rsp = json.loads(f.read().decode('utf-8'))
        print(rsp)
    
def main():
    parser = argparse.ArgumentParser(description="白山云api")
    parser.add_argument('-a','--api', required=True, default='quota', help='可用api:push,check')
    parser.add_argument('-u','--urls', default='', help='刷新或预热的url，用逗号分隔')
    parser.add_argument('-f','--file', default='', help='刷新或预热的url列表文件')
    parser.add_argument('-t','--task', default='', help='查询预热或刷新的taskID')
    parser.add_argument('-d','--dir', default='', help='预热列表文件的目录')
    parser.add_argument('-c','--domain', default='https://cdn-swzz.akbing.com/swzz/remote', help='cdm目录')
    args = parser.parse_args()
    print(args)
    if args.api == 'push':
        #预热
        if args.urls != '':
            PushUrlsCache(args.urls.split(','))
        elif args.file != '':
            PushUrlsCacheFromFile(args.file, args.domain)
        elif args.dir != '':
            PushUrlsCacheFromDir(args.dir, args.domain)
            
    elif args.api == 'check':
        CheckPushByTaskID(args.task)
    elif args.api == 'query':
        QueryDomainConfig(args.domain)
    

if __name__ == '__main__' :
    main()