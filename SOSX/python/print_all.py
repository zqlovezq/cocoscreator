#coding=utf-8
import argparse, datetime, os

def main():
    parser = argparse.ArgumentParser(description="打印文件列表")
    parser.add_argument('-d','--dir', default='../build/remote-diff', help='需要遍历的目录')
    parser.add_argument('-o','--output', default='cdn_push_files.txt', help='输出记录的文件')
    parser.add_argument('-m','--max', default="1000", help='单个文件最大条数')
    args = parser.parse_args()
    print(args.dir)
    timeStr = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    
    absDir = os.path.abspath(args.dir)
    if not os.path.exists(absDir):
        print(absDir + " not exists")
        return datetime.datetime.now().strftime('_%Y%m%d_%H%M%S_')
    
    resultFiles = []
    for(root,_,files) in os.walk(absDir):
        for filename in files:
            fullname = os.path.join(root, filename)
            fullname = fullname.replace(absDir, "").replace("\\", "/")
            if fullname[0] == "/":
                fullname = fullname[1:]
            # print(fullname)
            resultFiles.append(fullname + "\n")
            
    resultLen = len(resultFiles)
    # print(resultLen)
    maxLen = int(args.max)
    
    outfile = os.path.splitext(args.output)[0] + "_" + timeStr
    if resultLen > maxLen:
        count = int(len(resultFiles) / maxLen)
        if len(resultFiles) % maxLen > 0:
            count = count + 1

        for i in range(count):
            startIdx = i * maxLen
            endIdx = (i+1) * maxLen
            if endIdx > resultLen:
                endIdx = resultLen
            print(startIdx, endIdx)
            spiltFile = outfile + "_" + str(i+1) + ".txt"
            with open(spiltFile, 'w') as fwrite:
                fwrite.writelines(resultFiles[startIdx:endIdx])
    else:
        with open(outfile + ".txt", 'w') as fwrite:
            fwrite.writelines(resultFiles)

if __name__ == '__main__' :
    main()
