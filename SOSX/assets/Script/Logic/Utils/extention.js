var Audio = require('Sound')

/**
 * 装饰器
 * @param {*} decorator 
 */
 function wrap(decorator) {
    return function (obj, key) {
        let target = obj.prototype
        let descriptor = Object.getOwnPropertyDescriptor(target, key)
        decorator(target, key, descriptor)
    }
}

//按下button后，加一个音效
let buttonSound = wrap(function (target, key, descriptor) {
    Object.defineProperty(target, key, {
        value: function (event) {
            Audio.PlaySound("Button")
            return descriptor.value.call(this, event)
        }
    })
})
buttonSound(cc.Button, "_onTouchEnded")