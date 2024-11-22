/*
 * @Descripttion: 管理新好友标记
 */

export default class ManagerNewFriend {
    private _new_friend_info_map: Map<string, boolean> = new Map<string, boolean>();
    
    private static _instance: ManagerNewFriend = null;
    public static getInstance(): ManagerNewFriend {
        if (!ManagerNewFriend._instance){
            ManagerNewFriend._instance = new ManagerNewFriend();
        }
        return ManagerNewFriend._instance;
    }

    /* 添加新好友
     */
    public insertNewFriend(roleID: string){
        if(this._new_friend_info_map.has(roleID)){
            this._new_friend_info_map.delete(roleID);
        }

        this._new_friend_info_map.set(roleID, true);
    }

    /* 获取该ID是不是新的好友
     */
    public getIsNewFriend(roleID: string){
        if(this._new_friend_info_map.has(roleID)){
            return this._new_friend_info_map.get(roleID);
        }

        return false;
    }

    /* 改变为非新好友状态【这块特意加这么个接口而不用insertNewFriend 主要是减少不必要的缓存空间】
     */
    public changeUnNewFriend(roleID: string){
        if(this._new_friend_info_map.has(roleID)){
            this._new_friend_info_map.delete(roleID);
            this._new_friend_info_map.set(roleID, false);
        }
    }

    /* 
     */
    public destroy(){
        this._new_friend_info_map.clear();
    }
}
