package com.reactdemo.module;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 类或文件描述
 * <p>
 * Created by：wangjian on 2018/2/26 14:46
 */
public class MyPackage implements ReactPackage {
    
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
    
        modules.add(new ToastModule(reactContext));
        modules.add(new ImagePickModule(reactContext));
        modules.add(new ChangeMsgModule(reactContext));
        return modules;
    }
    
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
