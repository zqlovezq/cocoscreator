import { JsonAsset, assetManager, resources } from "cc";
import { tab } from "./table_gen";

export function LoadTable(worldPath: string, progressCallback?: (completedCount: number, totalCount: number, item: any) => void): Promise<void> {
    return new Promise(resolve => {
        console.log("worldKey", worldPath)
        let paths = []
        paths.push('tabledata/table_gen')
        paths.push(worldPath) //多语言
        resources.load(paths, JsonAsset, progressCallback, (error: Error, resource: any) => {
            if (error) {
                throw error;
            }

            let worldData = {}
            for (let index = 0; index < resource.length; index++) {
                const v = resource[index];
                if (v.name == 'table_gen') {
                    tab.InitData(v.json)
                    assetManager.releaseAsset(v)
                }
            }
            resolve();
        })
        // resources.load('tabledata/table_gen', JsonAsset, progressCallback, (error: Error, resource: any)=>{
        //     if(error) {
        //          throw error;
        //     }
        //     tab.InitData(resource.json)
        //     assetManager.releaseAsset(resource)
        //     resolve();
        // })

    })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   