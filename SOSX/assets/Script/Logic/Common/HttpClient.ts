/*
 * @Descripttion: HttpClient
 */

import { isValidObj } from "./CommonInterface";

/**
 * HttpClient封装
 */
export class HttpClient{
    private static _instance: HttpClient   = null;
    public static getInstance(): HttpClient {
        if (!HttpClient._instance){
            HttpClient._instance = new HttpClient();
        }
        return HttpClient._instance;
    }

    /* GET 请求
     * @param url 
     * @param path 
     * @param params 
     * @param callback 
     * @returns 
     */
    public Get(url: string, path: string, params: string, callback: Function){
        const xhr      = new XMLHttpRequest();
        let requestURL = url + path;
        xhr.timeout    = 5000;
        
        isValidObj(params) && (requestURL = requestURL + "?" + params);
        xhr.open("GET",requestURL, true);
        //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                cc.log("get: http res("+ xhr.responseText.length + "):" + xhr.responseText);

                try {
                    let ret = xhr.responseText;
                    callback !== null && callback(null, ret);
                } catch (err) {
                    cc.error("get err:" + err);
                    callback(err, null);
                } finally{
                    cc.log("get finally --- state: " + xhr.readyState);
                }
            }
        };
        
        xhr.send();
        return xhr;
    }

    /* POST 请求
     * @param url 
     * @param path 
     * @param params 
     * @param body 
     * @param callback 
     * @returns 
     */
    public Post(url: string, path: string, params: string, body: any, callback: Function) {
        const xhr      = new XMLHttpRequest();
        let requestURL = url + path;
        xhr.timeout    = 5000;

        isValidObj(params) && (requestURL = requestURL + "?" + params);
        xhr.open("POST",requestURL, true);
        body && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                cc.log("post: http res("+ xhr.responseText.length + "):" + xhr.responseText);

                try {
                    let ret = xhr.responseText;
                    callback !== null && callback(null, ret);
                } catch (err) {
                    cc.error("post err:" + err);
                    callback(err, null);
                }
                finally{
                    cc.log("post finally --- state: " + xhr.readyState);
                }
            }
        };
        
        body && xhr.send(body);
        return xhr;
    }

    /* 下载
     * @param url 
     * @param path 
     * @param params 
     * @param callback 
     * @returns 
     */
    public Download(url: string, path: string, params: string, callback: Function) {
        const xhr      = new XMLHttpRequest();
        let requestURL = url + path;
        xhr.timeout    = 5000;

        isValidObj(params) && (requestURL = requestURL + "?" + params);
        xhr.responseType = "arraybuffer";  // 指定数据类型
        xhr.open("GET",requestURL, true);
        //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                var buffer = xhr.response;
                var data = new Uint8Array(buffer); // arraybuffer, new Unit8Array
                callback(null, data);
                return;
            }

            cc.error("download---error: " + xhr.readyState);
        };
        
        xhr.send();
        return xhr;
    }
}
