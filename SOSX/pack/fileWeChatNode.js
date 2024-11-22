var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
const execSync = require('child_process').execSync;


var channel = process.argv[2]
var version = process.argv[3]

console.log("-----------开始执行" ,"版本号：" + version)


var mkdirSync = function (path) {
    try {
        fs.mkdirSync(path);
    } catch(e) {
        if ( e.code != 'EEXIST' ) throw e;
    }
}

var isDir = function (path) {
    try {
        var stat = fs.statSync(path);
        return true
    } catch(err) {
        return false
    }
}



function writeFile(p,text){
    fs.writeFile(p, text,function (err) {
        if (!err)
          console.log("写入成功！")
      })
}

//递归创建目录 同步方法  
function mkdirsSync(dirname) {  
    if (fs.existsSync(dirname)) {  
      return true;
    } else {  
        if (mkdirsSync(path.dirname(dirname))) {  
            fs.mkdirSync(dirname);
            return true;
        }  
    }  
}

function _copy(src, dist) {
  var paths = fs.readdirSync(src)
  paths.forEach(function(p) {
    var _src = src + '/' +p;
    var _dist = dist + '/' +p;
    var stat = fs.statSync(_src)
    if(stat.isFile()) {// 判断是文件还是目录
      fs.writeFileSync(_dist, fs.readFileSync(_src));
    } else if(stat.isDirectory()) {
      copyDir(_src, _dist)// 当是目录是，递归复制
    }
  })
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src,dist){
  var b = fs.existsSync(dist)
  if(!b){
    mkdirsSync(dist);//创建目录
  }
  _copy(src,dist);
}

function delFile(path, reservePath) {
    if (fs.existsSync(path)) {
        if (fs.statSync(path).isDirectory()) {
            let files = fs.readdirSync(path);
            files.forEach((file, index) => {
                let currentPath = path + "/" + file;
                if (fs.statSync(currentPath).isDirectory()) {
                    delFile(currentPath, reservePath);
                } else {
                    fs.unlinkSync(currentPath);
                }
            });
            if (path != reservePath) {
                fs.rmdirSync(path);
            }
        } else {
            fs.unlinkSync(path);
        }
    }
}


var startPath = process.argv[4] 

console.log("执行目录",__dirname)

var updatePath = path.join(__dirname,channel)
var projectPath = path.join(__dirname,"../" +startPath )
var versionPath = path.join(__dirname,channel+"/versions/"+version)
console.log("执行目录 projectPath",projectPath)

if (!fs.existsSync(projectPath + "/remote")) {
  console.log("没有资源文件 /jsb-default/assets")
  console.log("执行失败，检查资源后再次执行")
  return
}

if (isDir(updatePath) == false){
    console.log("创建基础目录")
    var dirList = ["/1_old","/2_new","/allFile","/versions"]
    mkdirSync(updatePath)
    for (var i = 0; i < dirList.length; i++) {
        mkdirSync(path.join(__dirname,channel + dirList[i]))
    }
}

if (isDir(versionPath) == true){
      console.log("版本重复",version)
    console.log("执行失败，检查版本后再次执行")
    return
}else{
    console.log("创建版本目录")
    mkdirSync(versionPath)
}

delFile(projectPath + "/assets/version")

var dirList = ["/remote"]
dirList.forEach(function(element) {
  var sourceDir = projectPath + element
  var targetDir = updatePath + "/2_new" + element
  copyDir(sourceDir,targetDir);
});
console.log("复制完毕")

delFile(updatePath+"/allFile/version")

var sourceDir = updatePath + "/2_new/"
var targetDir = updatePath + "/1_old/"
var deltaDir  = versionPath + "/"
const output = execSync('python ' +path.join(__dirname,"bydCompare_1.py " +sourceDir + " " +targetDir + " " +deltaDir ))
console.log("差异比对完毕")

copyDir(versionPath,updatePath+"/allFile");

var v = " -v " + version
var s = " -s " + updatePath+"/allFile/"
var d = " -d " + versionPath + "/version"

console.log("生成版本控制")
execSync('node ' + path.join(__dirname,"version_generator_wechat.js" +v + s +d ))

copyDir(versionPath + "/version",updatePath+"/allFile/version");
copyDir(versionPath + "/version",projectPath+"/assets/version");

copyDir(updatePath + "/2_new/",updatePath + "/1_old/");

// delFile(updatePath + "/2_new/assets/")
delFile(updatePath + "/2_new/remote/")
// delFile(updatePath + "/2_new/src/")

console.log("复制非加密js到版本目录")
// copyDir(projectPath+"/js backups (useful for debugging)",versionPath + "/zjsDebug/");

console.log("")
console.log("")
console.log("-----------执行结束" ,"版本号：" + version)