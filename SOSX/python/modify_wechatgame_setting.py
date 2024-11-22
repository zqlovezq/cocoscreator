import os,json,argparse
cfg_file = "../build/wechatgame/src/settings.js"

def ChangeRemote(remoteAddr):
    with open(cfg_file, 'r', encoding='utf8') as fread:
        content = fread.read()
        remoteStr = ""
        startIdx = content.find("server:\"") + len("server:\"")
        endIdx = content[startIdx:].find("\"")
        remoteStr = content[startIdx:startIdx+endIdx]
        newContent = content[:startIdx] + remoteAddr + content[startIdx+endIdx:]
        
        print("from: {} \nto: {}".format(remoteStr, remoteAddr))
        # print(newContent)
        with open(cfg_file, 'w', encoding='utf8') as fwrite:
            fwrite.write(newContent)
        
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-r', '--remote', required=True, help='remote address')
    args = parser.parse_args()
    print(args)
    ChangeRemote(args.remote)