import shutil
tmpFile = "./tmp/game.js"
file="../build/wechatgame/subpackages/Script/game.js"
with open(tmpFile, 'r', encoding='utf-8') as fread:
    content = fread.read()
    # content = content.replace(r"this['_super']", "this._super")
    content = content.replace(r"this['\x5f\x73\x75\x70\x65\x72']", "this._super")
    with open(file, 'w', encoding='utf-8') as fwrite:
        fwrite.write(content)
        
shutil.copy2(r".\tmp\index.js", r"..\build\wechatgame\assets\start-scene\index.js")