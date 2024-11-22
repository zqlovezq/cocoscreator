
const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingScene extends cc.Component {

    @property(cc.Prefab)
    preLoading: cc.Prefab = null;
    @property(cc.Prefab)
    BountyPreLoading:cc.Prefab = null;
    setLoading(isBounty:boolean){
        if(isBounty){
            let _loadNode = cc.instantiate(this.BountyPreLoading)
            this.node.addChild(_loadNode)
        }else{
            let loadNode = cc.instantiate(this.preLoading)
            this.node.addChild(loadNode)
        }
    }
}
