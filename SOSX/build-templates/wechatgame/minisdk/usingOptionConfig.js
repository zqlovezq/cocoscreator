module.exports = {
  useACTIVITYSDK: true, // 必填 ，true: 开启红包活动接入。 false:不接入红包活动  （要接入广告sdk 时 ，请先设置该值为 true）
  useADSDK: true, // 必填 ，true: 开启广告sdk 接入。 false:不接入广告sdk  （要接入广告sdk 时 ，请先设置该值为 true）
  env: 'Prod', // 必填 运行环境：  测试Test  上线Prod，上线审核开始要把环境改为Prod
}