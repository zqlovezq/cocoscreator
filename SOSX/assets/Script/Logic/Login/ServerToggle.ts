
import { tab } from "../../Table/table_gen";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ServerToggle extends cc.Component {

    @property(cc.Label)
    serverName:cc.Label = null;

    @property(cc.Toggle)
    toggle:cc.Toggle = null

    protected id:number = 0

    serServerData(data:tab.ServerlistTable) {
        this.id = data.ID
        this.serverName.string = data.Name;
    }
    getServerID() {
        return this.id
    }

    isChecked():boolean {
        return this.toggle.isChecked
    }
    setChecked() {
        this.toggle.check()
    }
}
