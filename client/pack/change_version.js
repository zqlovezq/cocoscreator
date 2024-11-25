var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
const execSync = require('child_process').execSync;

var isDir = function (path) {
  try {
    var stat = fs.statSync(path);
    return true
  } catch (err) {
    return false
  }
}

var mkdirSync = function (path) {
  try {
    fs.mkdirSync(path);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
}

function checkFileExistsSync(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
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
  paths.forEach(function (p) {
    var _src = src + '/' + p;
    var _dist = dist + '/' + p;
    var stat = fs.statSync(_src)
    if (stat.isFile()) {// 判断是文件还是目录
      fs.writeFileSync(_dist, fs.readFileSync(_src));
    } else if (stat.isDirectory()) {
      copyDir(_src, _dist)// 当是目录是，递归复制
    }
  })
}

/*
* 复制目录、子目录，及其中的文件
* @param src {String} 要复制的目录
* @param dist {String} 复制到目标目录
*/
function copyDir(src, dist) {
  var b = fs.existsSync(dist)
  if (!b) {
    mkdirsSync(dist);//创建目录
  }
  _copy(src, dist);
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

function getVersion(uplpadDir) {
  let dirPath = path.join(__dirname, 'buildVersion/')
  if (isDir(dirPath) == false) {
    mkdirSync(dirPath)
  }
  let versionFilePath = dirPath + uplpadDir + "__" + isRelease + "_version.txt"

  var fileData
  if (checkFileExistsSync(versionFilePath)) {
    fileData = fs.readFileSync(versionFilePath, 'utf8')
  } else {
    fileData = 0
  }

  fileData = Number(fileData) + 1
  fs.writeFileSync(versionFilePath, fileData.toString(), 'utf8')
  return fileData
}



let projectPath = path.join(__dirname, '..')

console.log("node 执行目录", __dirname)
console.log("项目根目录", projectPath)


let isRelease = process.argv[2]
let appVersion = process.argv[3]
let uplpadDir = process.argv[4]

let resPath = path.join(__dirname, '/' + uplpadDir)
console.log("资源目录", resPath)
delFile(resPath)


let ver = getVersion(uplpadDir);

console.log("isRelease：", isRelease)

let version = appVersion + "." + ver
console.log("资源自增版本号：", version)


let platforms = ["android", "ios"]
for (let index = 0; index < platforms.length; index++) {
  let platform = platforms[index]

  let zipDir = ""

  zipDir = "/cocos/" + version 

  let zipPath = resPath + zipDir + "/" + platform + "/data"

  let buildPath = "/build/" + platform + "/data/"

  copyDir(projectPath + buildPath, zipPath);

  var v = " -v " + version
  var s = " -s " + zipPath
  var d = " -d " + zipPath + "/version"

  execSync('node ' + path.join(__dirname, "version_generator.js" + v + s + d))

  copyDir(zipPath + "/version/", projectPath + buildPath + "version");
  console.log("change_complete", zipPath)
}
