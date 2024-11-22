/*
 * @Descripttion: 联盟支援聊天数据模块
 */

import { proto } from "../../../Protocol/client_protocol";

const {ccclass, property} = cc._decorator;

/**
 * 支援人信息接口
 */
export interface DonorInfo{
    roleID: string; /* 捐献人ID */
    count: number; /* 捐献的数量 */
};

export default class AllianceSupportChat {
    public ApplicantID: string;              /* 请求支援人的ID */
    public ApplicantName: string;            /* 请求人名称 */
    public RequestCardID: number;            /* 请求支援的卡牌ID */
    public CurrentGainCount: number;         /* 当前已经获得支援数量 */
    public RequestSupportUpperLimit: number; /* 请求的卡牌数量上限 */
    public RequestTimestamp: number;        /* 发起请求的时间戳 */
    public DonorInfoList: DonorInfo[] = [];      /* 支援人列表 */

    constructor(roleID:       string, 
                name:         string,
                cardID:       number, 
                gainCnt:      number, 
                supportLimit: number, 
                timestamp:    number, 
                donorList:    proto.IAllianceCardDonateInfo[]){
        this.ApplicantID         = roleID;
        this.ApplicantName       = name;
        this.RequestCardID       = cardID;
        this.CurrentGainCount    = gainCnt;
        this.RequestSupportUpperLimit = supportLimit;
        this.RequestTimestamp    = timestamp;
        if(donorList){
            for(let donor of donorList){
                let donorInfo = {roleID: donor.donateRoleID, count: donor.count};
                this.DonorInfoList.push(donorInfo);
            }
        }
    }
}
