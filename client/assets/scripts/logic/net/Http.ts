import { assetManager, js, loader } from "cc"
import { ShowTips } from "../mgr/UIMgr"

export interface HttpData { host: string, method: "GET" | "POST", reqParam: string, cb: Function }

export default class Http {

    static request(dd:HttpData) {
        let http = new Http()
        http.errCount = 0
        http.send(dd)
    }

    private constructor() {

    }

    errCount: number

    send(dd:HttpData) {
        console.warn(`http----------------${dd.host}?${dd.reqParam}`,this.parmsFormat(dd.reqParam))
        if (dd.host == ""){
            return
        }
        let request = new XMLHttpRequest()
        request.open("GET", `${dd.host}?${this.parmsFormat(dd.reqParam)}`,true)
        request.onload = () => {
            console.log(`http request onload readyState=${request.readyState}, status=${request.status}， txt=${request.responseText}`)
            let responseJson = JSON.parse(request.responseText);
            dd.cb && dd.cb(responseJson)
        }
        request.onerror = (err) => {
            console.log(`http request onerror`,request.status,request.statusText)
            this.onErr(dd)
        }
        request.ontimeout = (err) => {
            console.log(`http request ontimeout`)
            this.onErr(dd)
        }
        request.timeout = 10000;
        try {
            request.send();
        } catch (error) {
            this.onErr(dd)
        }
       
    }

    parmsFormat(reqParam: string) {
        let newParams = ""
        let list = reqParam.split("&")
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let firstEqualIndex: number = v.indexOf('=');
            if (firstEqualIndex>=0){
                if (newParams.length != 0){
                    newParams += "&"
                }
                newParams += `${v.substring(0,firstEqualIndex)}=${encodeURIComponent(v.substring(firstEqualIndex+1,v.length))}`
            }
        }
        return newParams
    }

    onErr(dd:HttpData) {
        this.errCount = this.errCount + 1
        if (this.errCount >= 3) {
            dd.cb && dd.cb()
            return
        }
        this.send(dd)
    }
}