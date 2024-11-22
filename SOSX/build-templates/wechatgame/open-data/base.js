const RankInfo = function () {
    // 通用于排行数据的结构体样式.
	this.lv = 0;
    this.score = 0;
	this.timestamp = 0;
    this.avatar = null;
    this.nickname = null;
	this.gamename = null;
    this.openid = null;
	this.data = null;
	this.title1 = null;
	this.title2 = null;
};

const Common = {
    // 获取当前的星期数.
    getFullWeeks: function (timestamp) {
        // 1970-1-1是周四. 距离下个周日有3天.259200000,时间戳是以08:00开始的,再校正一下,+8时区.
        let weeks = Math.floor((timestamp - 230400000) / 604800000);
        return weeks;
    },

    //获取当前月数.
    getMonths: function (timestamp) {
        if (!timestamp) timestamp = Date.now();
        let date = new Date();
        date.setTime(timestamp);
        return date.getUTCMonth()
    },

    // 获取当前年份.
    getYears: function (timestamp) {
        if (!timestamp) timestamp = Date.now();
        let date = new Date();
        date.setTime(timestamp);
        return date.getUTCFullYear()
    },

    // 判断当前星期数是否相等.
    isSameWeek: function (time1, time2) {
        if (!time1 || !time2) return false;
        return this.getFullWeeks(time1) === this.getFullWeeks(time2)
    },

    // 判断当前月数是否相等.
    isSameMonth: function (time1, time2) {
        if (!time1 || !time2) return false;
        const d1 = new Date();
        const d2 = new Date();
        d1.setTime(time1);
        d2.setTime(time2);
        return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth();
    }
};

const RankUtil = {
    // 获取某key对应的排行数据
    getRankData: function (key) {
        return new Promise(resolve => {
            wx.getFriendCloudStorage({
                keyList: [key],
                success: res => {
                    console.log('wx.getFriendCloudStorage success:', res);
					
                    const infos = res.data;
                    if (!infos || infos.length <= 0) {
                        console.log("排行榜数据为空===");
                        return [];
                    }
					
					let ranks = [];
                    // 这里并未进行数据排序.
                    let rankIndex = 0;
                    for (let item of infos) {
                        if (!item.KVDataList || item.KVDataList.length <= 0) {
                            continue;
                        }
						
                        let values = item.KVDataList[0].value.split(";");
						if(values && values.length > 1){
							let rank = new RankInfo();
							rank.lv        = 0;
							rank.score     = parseInt(values[0]);
							rank.nickname  = item.nickname;
							rank.avatar    = item.avatarUrl;
							rank.openid    = item.openid;
							rank.timestamp = parseInt(values[1]);
							rank.gamename  = "(" + values[3] + ")";
							rank.data      = item.nickName;
							rank.title1    = "积分:";
							rank.title2    = "回合:";
							ranks.push(rank);
						}
                    }
                    resolve(ranks);
                },
				
                fail: res => {
                    console.error('wx.getFriendCloudStorage fail', res);
                    resolve([]);
                }
            })
        })
    },

    // 根据某key 进行数据排序.
    sortData: function (dataList) {
        if (!dataList) return;
        if (dataList.length <= 0) return;
       
        dataList.sort((data1, data2) => {
			if(data1.score == data2.score){
				if(data1.timestamp == data2.timestamp){
					return data1.openid <= data2.openid ? -1 : 0;
				}
				
				return data1.timestamp - data2.timestamp;
			}
			
            return data2.score - data1.score;
        });
		
        for (let i = 0; i < dataList.length; i++) {
            dataList[i].lv = i;
        }
    },

    // 从排行榜中过滤查找自己的排行数据,不借助openid比较.
    filterSelfData: function (dataList, selfData) {
        if (!selfData || !dataList) return;
        for (let d of dataList) {
            if (selfData.nickname === d.nickname) {
                // console.log("查找到自已的排行数据.");
                selfData.lv = d.lv == null ? 0 : d.lv;
            }
        }
    },

    // 获取当前玩家自己的排行数据.
    getSelfData: function (key) {
        return this.getSelfUserInfo().then(userInfo => {
            const ranks     = new RankInfo();
            ranks.avatar    = userInfo.avatarUrl;
            ranks.nickname  = userInfo.nickName;
            ranks.openid    = userInfo.openid;
			//ranks.lv        = userInfo.lv;
			ranks.score     = userInfo.score;
			ranks.gamename  = userInfo.gamename;
			ranks.title1    = "积分:";
			ranks.title2    = "回合:"
			ranks.data      = userInfo.nickname;


            return new Promise(resolve => {
                wx.getUserCloudStorage({
                    keyList: [key],
                    success(res) {
                        console.log("获取到当前玩家的数据.", res);
                        
						if (!res.KVDataList || res.KVDataList.length <= 0) {
                            resolve(ranks);
                            return;
                        }
						
						if(res.KVDataList[0]){
							let values = res.KVDataList[0].value.split(";");
							if(values && values.length > 3){
								ranks.score = parseInt(values[0]);
								ranks.timestamp = parseInt(values[1]);
								ranks.nickname = values[2];
								ranks.gamename = "(" + values[3] + ")";
							}
						}
						
                        //let rankCloud = JSON.parse(res.KVDataList[0].value);
                        //ranks.data = rankCloud;
                        resolve(ranks);
                    },
                    fail(res) {
                        resolve(ranks);
                    }
                });
            })
        }).catch(res => {
            console.error("获取当前玩家用户信息失败.");
        });
    },
	
    // 获取当前玩家的个人信息, 用于无排行数据时进行显示.
    getSelfUserInfo: function () {
        return new Promise((resolve, reject) => {
            wx.getUserInfo({
                openIdList: ["selfOpenId"],
                lang: "zh_CN",
                success(res) {
                    resolve(res.data[0])
                }, fail(res) {
                    reject(res)
                }
            })
        })
    },

};
module.exports.RankInfo = RankInfo;
module.exports.RankUtil = RankUtil;
module.exports.Common = Common;