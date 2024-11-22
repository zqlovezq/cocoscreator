var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
const execSync = require('child_process').execSync;

var appID
var remoteURL
var isRelease
var serverId
var version

var i = 2;
while ( i < process.argv.length) {
    var arg = process.argv[i];
    switch (arg) {
    case '--appID' :
        appID = process.argv[i+1];
        i += 2;
        break;
    case '--remoteURL' :
        remoteURL = process.argv[i+1];
        i += 2;
        break;
    case '--release' :
        isRelease = process.argv[i+1];
        i += 2;
        break;
    case '--serverId' :
        serverId = process.argv[i+1];
        i += 2;
        break;
    case '--version' :
        version = process.argv[i+1];
        i += 2;
        break;
    default :
        i++;
        break;
    }
}

console.log("js 接受参数：",{isRelease:isRelease,
                            serverId:serverId,
                            version:version,
                            appID:appID,
                            remoteURL:remoteURL
                            })

console.log("js 修改远程 server地址")
let wegameSettingPath = path.join(__dirname, '../settings/wechatgame.json')
let resPath = path.join(__dirname, '../assets/resources.meta')
let buildGamePath = path.join(__dirname, '../build-templates/wechatgame/game.json')
let wecahtVerPath = path.join(__dirname, '../assets/Update/wechat_ver.ts')

console.log("js 修改文件路径：",wegameSettingPath,resPath,buildGamePath,wecahtVerPath)

let wegameJson = JSON.parse(fs.readFileSync(wegameSettingPath, 'utf8'))
let resJson = JSON.parse(fs.readFileSync(resPath, 'utf8'))
let gameJson = JSON.parse(fs.readFileSync(buildGamePath, 'utf8'))
let wechatVerStr = fs.readFileSync(wecahtVerPath, 'utf8')

wegameJson.appid = appID

if (isRelease == 1){
    wegameJson.REMOTE_SERVER_ROOT  = remoteURL

    resJson.compressionType.wechatgame = "default"
    resJson.isRemoteBundle.wechatgame = true
    
    gameJson.subpackages = [ {"name": "Script","root": "subpackages/Script"}]
}else{

    wegameJson.REMOTE_SERVER_ROOT  = ""

    resJson.compressionType.wechatgame = "subpackage"
    resJson.isRemoteBundle.wechatgame = false
   
    gameJson.subpackages = [{"name": "resources","root": "subpackages/resources"}, {"name": "Script","root": "subpackages/Script"}]
}

wechatVerStr = `export const WechatgameVer = '${version}' \nexport const WechatgameServerId = ${serverId}`

console.log("替换后属性：",{
                        wegameSetting_appid:wegameJson.appid,
                        wegameSetting_REMOTE_SERVER_ROOT:wegameJson.REMOTE_SERVER_ROOT,
                       resources_compressionType: resJson.compressionType.wechatgame,
                       resources_isRemoteBundle:resJson.isRemoteBundle.wechatgame,
                       buildGame_subpackages:gameJson.subpackages,
                       wechatVerStr:wechatVerStr })

fs.writeFileSync(wegameSettingPath, JSON.stringify(wegameJson), 'utf8')
fs.writeFileSync(resPath, JSON.stringify(resJson), 'utf8')
fs.writeFileSync(buildGamePath, JSON.stringify(gameJson), 'utf8')
fs.writeFileSync(wecahtVerPath, wechatVerStr, 'utf8')
console.log("-----------替换完毕----------------")