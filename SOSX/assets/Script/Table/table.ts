import { tab } from "./table_gen";


export function LoadTable(progressCallback?: (completedCount: number, totalCount: number, item: any) => void) : Promise<void>{
    return new Promise(resolve=>{
        cc.resources.load('tabledata/table_gen', cc.JsonAsset, progressCallback, (error: Error, resource: any)=>{
            if(error) {
                 throw error;
            }
            tab.InitData(resource.json)
            cc.assetManager.releaseAsset(resource)
            resolve();
        })
    })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   