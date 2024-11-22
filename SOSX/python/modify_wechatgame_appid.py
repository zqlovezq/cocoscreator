import os,json,argparse
cfg_file = "../build/wechatgame/project.config.json"

def ChangeAppID(newAppID):
    with open(cfg_file, 'r', encoding='utf8') as fread:
        wechatCfg = json.load(fread)
        print("from: " + wechatCfg["appid"])
        print("to:   " + newAppID)
        
        wechatCfg["appid"] = newAppID
        with open(cfg_file, 'w') as fwrite:
            fwrite.write(json.dumps(wechatCfg))
        
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--id', required=True, help='wechatgame app id')
    args = parser.parse_args()
    print(args)
    ChangeAppID(args.id) #wx8a9d09983a9a777a