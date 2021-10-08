package org.cocos2dx.javascript;
import android.content.Context
import cn.thinkingdata.android.TDConfig
import cn.thinkingdata.android.ThinkingAnalyticsSDK
//import com.donews.library.sdk.BuildConfig
import org.json.JSONObject

object ShushuAnalysisHelp {

    private var instance: ThinkingAnalyticsSDK? = null
    @JvmStatic
    fun init(context: Context, appId: String, serverUrl: String) {
//        if (BuildConfig.DEBUG) {
//            val config = TDConfig.getInstance(context, appId, serverUrl)
//            config.mode = TDConfig.ModeEnum.DEBUG
//            instance = ThinkingAnalyticsSDK.sharedInstance(config)
//        } else {
            instance = ThinkingAnalyticsSDK.sharedInstance(context, appId, serverUrl)
//        }
    }

    /**
     * 设置公共事件
     *
     * @param jsonObject JSONObject 对应公共事件的属性键值对
     */
    fun setSuperProperties(jsonObject: JSONObject) {
        instance?.superProperties = jsonObject
    }

    /**
     * 事件上报带属性
     *
     * @param eventId String 事件ID
     * @param jsonObject JSONObject 对应事件的属性键值对
     */
    @JvmStatic
    fun track(eventId: String, jsonObject: JSONObject) {
        instance?.track(eventId, jsonObject)
    }

    /**
     * 事件上报只有事件
     *
     * @param eventId String 事件ID
     */
    @JvmStatic
    fun track(eventId: String) {
        instance?.track(eventId)
    }

    fun login(uid: String) {
        instance?.login(uid)
    }

    fun logout() {
        instance?.logout()
    }

    fun enableAutoTrack(list: List<ThinkingAnalyticsSDK.AutoTrackEventType>) {
        instance?.enableAutoTrack(list)
    }

    /**
     * 访客ID
     */
    fun getDistinctId(): String {
//        return if (instance?.distinctId.isNullOrBlank()) "" else instance?.distinctId!!
        return instance?.distinctId!!
    }

    /**
     * 累计，value只允许number类型
     *
     * @param jsonObject JSONObject
     */
    fun userAdd(jsonObject: JSONObject) {
        instance?.user_add(jsonObject)
    }

    fun getDeviceId(): String? {
        return instance?.deviceId
    }
}