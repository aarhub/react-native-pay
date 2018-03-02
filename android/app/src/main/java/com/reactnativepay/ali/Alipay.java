package com.reactnativepay.ali;

import com.alipay.sdk.app.PayTask;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.Map;

/**
 * Created by chaos on 02/03/2018.
 */

public class Alipay extends ReactContextBaseJavaModule {
    public Alipay(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Alipay";
    }

    @ReactMethod
    public void pay(final String orderInfo, final Promise promise) {
        Runnable payRunnable = new Runnable() {
            @Override
            public void run() {
                WritableMap map = Arguments.createMap();
                PayTask alipay = new PayTask(getCurrentActivity());
                Map<String, String> result = alipay.payV2(orderInfo, true);
                for (Map.Entry<String, String> entry : result.entrySet())
                    map.putString(entry.getKey(), entry.getValue());
                promise.resolve(map);
            }
        };
        // 必须异步调用
        Thread payThread = new Thread(payRunnable);
        payThread.start();
    }
}
