let defaultCfg = { 
    preload:{
        maxConcurrency: cc.assetManager.presets['preload'].maxConcurrency,
        maxRequestsPerFrame: cc.assetManager.presets['preload'].maxRequestsPerFrame
    } 
}

export function SetExtremeHighConcurrency() {
    cc.assetManager.presets['preload'].maxConcurrency = 1024;
    cc.assetManager.presets['preload'].maxRequestsPerFrame = 1024;
    console.log(`SetHighConcurrency: ${JSON.stringify(cc.assetManager.presets['preload'])}`)
}

export function SetHighConcurrency() {
    cc.assetManager.presets['preload'].maxConcurrency = 8;
    cc.assetManager.presets['preload'].maxRequestsPerFrame = 8;
    console.log(`SetHighConcurrency: ${JSON.stringify(cc.assetManager.presets['preload'])}`)
}

export function SetMediumConcurrency() {
    cc.assetManager.presets['preload'].maxConcurrency = 4;
    cc.assetManager.presets['preload'].maxRequestsPerFrame = 4;
    console.log(`SetHighConcurrency: ${JSON.stringify(cc.assetManager.presets['preload'])}`)
}

export function SetDefaultConcurrency() {
    cc.assetManager.presets['preload'].maxConcurrency = defaultCfg.preload.maxConcurrency;
    cc.assetManager.presets['preload'].maxRequestsPerFrame = defaultCfg.preload.maxRequestsPerFrame;
    console.log(`SetHighConcurrency: ${JSON.stringify(cc.assetManager.presets['preload'])}`)
}