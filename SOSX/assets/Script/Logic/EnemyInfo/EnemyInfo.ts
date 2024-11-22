
import { tab } from "../../Table/table_gen";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import PopLayer from "../Utils/PopLayer";
import EnemyBossInfoCell from "./EnemyBossInfoCell";
import EnemyInfoCell from "./EnemyInfoCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyInfo extends PopLayer {

    @property(InfiniteList)
    enemyList:InfiniteList = null

    @property(cc.Prefab)
    m_enemy_cell_prefab: cc.Prefab = null

    @property(InfiniteList)
    bossList:InfiniteList = null

    @property(cc.Prefab)
    m_boss_cell_prefab: cc.Prefab = null

    m_enemys = []
    m_bosses = []
    m_cell_height: number = 0;
    m_cell_height_boss: number = 0;
    m_enemy_load_flag:boolean = false

    onLoad () {
        this.enemyList.Init({
            getCellNumber: this.GetCellNumber.bind(this),
            getCellSize: this.GetCellSize.bind(this),
            getCellIdentifer: this.GetCellIdentifer.bind(this),
            getCellView: this.GetCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });

        this.bossList.Init({
            getCellNumber: this.GetCellNumber1.bind(this),
            getCellSize: this.GetCellSize1.bind(this),
            getCellIdentifer: this.GetCellIdentifer1.bind(this),
            getCellView: this.GetCellView1.bind(this),
            getCellData: this.GetCellData1.bind(this),
        });
    }
    
    start(){
        this.initView();
    }

    public initView(){
        let data = tab.Data.EnemyOnlyShowTable //组织下数据
        for(let i = 0; i < data.length; i++){
            if(data[i].EnemyTypes == tab.EnemyType.EnemyType_Boss){
                this.m_bosses.push(data[i])
            } else {
                this.m_enemys.push(data[i])
            }
        }
        this.bossList.Reload()
    }

    GetCellNumber1(): number{
        return this.m_bosses.length;
    }

    GetCellSize1(idx: number): number{
        if (this.m_cell_height_boss == 0){
            this.m_cell_height_boss = cc.instantiate(this.m_boss_cell_prefab).height;
        }
        return this.m_cell_height_boss;
    }

    GetCellIdentifer1(idx: number): string{
        return "EnemyInfoBossCell"
    }

    GetCellView1(idx: number): InfiniteCell{
        return cc.instantiate(this.m_boss_cell_prefab).getComponent(EnemyBossInfoCell);
    }

    GetCellData1(idx: number){
        if (idx < this.m_bosses.length){
            return this.m_bosses[idx];
        }
        return null;
    }

    GetCellNumber(): number{
        return this.m_enemys.length;
    }

    GetCellSize(idx: number): number{
        if (this.m_cell_height == 0){
            this.m_cell_height = cc.instantiate(this.m_enemy_cell_prefab).height;
        }
        return this.m_cell_height;
    }

    GetCellIdentifer(idx: number): string{
        return "EnemyInfoCell"
    }

    GetCellView(idx: number): InfiniteCell{
        return cc.instantiate(this.m_enemy_cell_prefab).getComponent(EnemyInfoCell);
    }

    GetCellData(idx: number){
        if (idx < this.m_enemys.length){
            return this.m_enemys[idx];
        }
        return null;
    }

    enemyClick(){
        this.bossList.node.active = false
        this.enemyList.node.active = true
        if(this.m_enemy_load_flag == false){
            this.enemyList.Reload()
            this.m_enemy_load_flag = true
        }
    }

    bossClick(){
        this.bossList.node.active = true
        this.enemyList.node.active = false
    }
}
