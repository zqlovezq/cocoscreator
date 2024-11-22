import os,shutil,argparse,re

def MoveFile(path, dir): 
    try:
        if os.path.exists(path):
            if not os.path.exists(dir):
                os.mkdir(dir)
            shutil.move(path, dir)
        else:
            print("not exist: " + path)
    except Exception as e:
        print(e)

def main():
    parser = argparse.ArgumentParser(description="移动引擎文件")
    parser.add_argument('-d','--dir', default='../build/wechatgame', help='wechatgame目录')
    args = parser.parse_args()
    print(args.dir)
    
    dir_engine = os.path.join(args.dir, "engine")
    if not os.path.exists(dir_engine):
        os.mkdir(dir_engine)
                
    dir_cocos = os.path.join(args.dir, "cocos")
    dir_src = os.path.join(args.dir, "src")
    dir_sdk = os.path.join(args.dir, "minisdk")
    file_adapter = os.path.join(args.dir, "adapter-min.js")
    file_require = os.path.join(args.dir, "ccRequire.js")
    file_main = os.path.join(args.dir, "main.js")
    file_game = os.path.join(args.dir, "game.js")
    file_backup = os.path.join(args.dir, "game-backup.js")
    
    MoveFile(dir_cocos, dir_engine)
    MoveFile(dir_src, dir_engine)
    MoveFile(dir_sdk, dir_engine)
    MoveFile(file_adapter, dir_engine)
    MoveFile(file_require, dir_engine)
    MoveFile(file_main, dir_engine)
    MoveFile(file_game, dir_engine)
    
    #rename game-backup.js
    if os.path.exists(file_backup):
        os.rename(file_backup, file_game)
        
    dir_engine_assets = os.path.join(dir_engine, "assets")
    if not os.path.exists(dir_engine_assets):
        os.mkdir(dir_engine_assets)
    
    #move assets/index*.js
    dir_assets = os.path.join(args.dir, "assets")
    for sub_dir in os.listdir(dir_assets):
        sub_path = os.path.join(dir_assets, sub_dir)
        for file in os.listdir(sub_path):
            if re.match("index(.*)\.js$", file) != None:
                filePath = os.path.join(sub_path, file)
                MoveFile(filePath, os.path.join(dir_engine_assets, sub_dir))
    

if __name__ == '__main__' :
    main()