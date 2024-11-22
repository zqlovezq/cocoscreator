import os,json,random,shutil,time
import urllib.request
import ssl

context = ssl._create_unverified_context()
time_out = 60

# {"error":"Bad request","message":"Request is invalid"}
# {"input":{"size":37864,"type":"image/png"},"output":{"size":11761,"type":"image/png","width":195,"height":270,"ratio":0.3106,"url":"https://tinypng.com/web/output/6c6x7e682u8yztcbntzzmt02t6r7zyqa"}}
def CompressFile(filepath, dstfile):
    # print("compress file: {}".format(filepath))
    try:
        with open(filepath, "rb") as file_obj:
            contents = file_obj.read()
        
            req = urllib.request.Request('https://tinypng.com/web/shrink')
            req.add_header('Postman-Token', str(int(time.time())))
            req.add_header('Cache-Control', 'no-cache')
            req.add_header('Content-Type', 'application/x-www-form-urlencoded')  
            req.add_header('User-agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36')
            req.add_header('X-Forwarded-For', GetRandomIP())    
            with urllib.request.urlopen(req, contents, time_out, context=context) as f:
                rsp = json.loads(f.read().decode('utf-8'))
                if "error" in rsp:
                    print("ERROR:{}".format(rsp["message"]))
                elif "output" in rsp:
                    if DownloadFile(rsp["output"]["url"], dstfile):
                        return True
                else:
                    print(rsp)
    except Exception as e:
        print("CompressFile exception: {}".format(str(e)))
    return False
            
def DownloadFile(url, outputFile):
    # print("DownloadFile {}".format(url))
    try:
        with urllib.request.urlopen(url, None, time_out, context=context) as f:
            contents = f.read()
            file_obj = open(outputFile, "wb")
            file_obj.write(contents)
            file_obj.close()
            return True
    except Exception as e:
        print("DownloadFile exception: {}".format(str(e)))
    return False
        
def GetRandomIP():
    return "{}:{}:{}:{}".format(random.randint(1,255), random.randint(1,255), random.randint(1,255), random.randint(1,255))