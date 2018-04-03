package com.reactdemo.module;

import android.os.Handler;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * react native 和native交互的几种方式
 * <p>
 * Created by：wangjian on 2018/4/2 17:01
 */
public class ChangeMsgModule extends ReactContextBaseJavaModule {
    ReactContext reactContext;
    
    public ChangeMsgModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }
    
    @Override
    public String getName() {
        return "ChangeMsgModule";
    }
    
    /**
     * 常量方式与rn进行交互
     *
     * @return
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        HashMap<String, Object> map = new HashMap<>();

        map.put("name", "xiaobai");
        map.put("age", "45");

        return map;
    }
    
    /**
     * promise方式交互
     *
     * @param name
     * @param promise
     */
    @ReactMethod
    public void getPromiseData(String name, Promise promise) {
        WritableMap writableMap = new WritableNativeMap();
        writableMap.putString("age", "20");
        writableMap.putString("name", "小白");
        promise.resolve(writableMap);
    }
    
    /**
     * callback 方式交互
     * 通过函数回调,传递一个string或者一个object
     * 不能传递json如果想传递json格式
     * 可以将json转成string 到react端再解析会json
     *
     * @param name
     * @param callback
     */
    @ReactMethod
    public void callBackTime(String name, final Callback callback) {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                callback.invoke("android 执行完后的结果");
            }
        }, 300);
    }
    
    
    /**
     * RCTDeviceEventEmitter 方式交互
     */
    @ReactMethod
    public void getData() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                WritableMap writableMap = new WritableNativeMap();
                writableMap.putString("key", "我是来自android native的消息");
                // 此处的EventName必须与js调用端保持相同
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("EventName", writableMap);
            }
        }).start();
    }
}
