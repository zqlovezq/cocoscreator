import os, sys, argparse, re

from configparser import ConfigParser
config = ConfigParser()
config.read('version_config.ini', encoding='utf-8')

def Main():
    parser = argparse.ArgumentParser(description="set login addr id")
    parser.add_argument('-i','--id', required=True, help='addr id, interger')
    parser.add_argument('-s', '--src', required=False, help='src dir')
    parser.add_argument('-n', '--new', required=False, help='add id if not exist')
    args = parser.parse_args()
    
    print(args)
    clienttype = args.id
    print(clienttype)
    
    if args.src != None:
        src_dir = args.src
    else:
        src_dir = config.get("DEFAULT", "jsb_root")
    # print(src_dir)
    
    for file in os.listdir(src_dir):
        if re.match("main(.*)\.js$", file) != None:
            filePath = os.path.join(src_dir, file)
            print(filePath)
            with open(filePath, "r", encoding='UTF-8') as f:
                content = f.read()
                # print(content)
                matchRet = re.search("window\.login_addr_id=\d+", content)
                if matchRet == None:
                    if args.new == None:
                        print('cannot find login_addr_id in main.js')
                    else:
                        content += "\nwindow.login_addr_id={};\n".format(clienttype)
                        f = open(filePath, 'w', encoding='UTF-8')
                        f.write(content)
                        f.close()
                    
                else:
                    # print(content[matchRet.span()[0]:matchRet.span()[1]])
                    newContent = content[ 0 : matchRet.span()[0] ] + "window.login_addr_id={}".format(clienttype) + content[ matchRet.span()[1]: ]
                    f = open(filePath, 'w', encoding='UTF-8')
                    f.write(newContent)
                    f.close()

Main()