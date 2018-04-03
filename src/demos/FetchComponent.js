/**
 * Created by Administrator on 2018/2/11.
 */

import React, {Component} from 'react';

export class FetchComponent extends Component {

    /**
     * 支持自定义timeOut请求
     *
     * @param fetch_promise 请求promise
     * @param timeout 超时时间
     * @returns {Promise.<*>|Promise.<T>}
     * @private
     */
    _fetch(fetch_promise, timeout) {
        let abort_fn = null;

        // 这是一个可以被reject的promise
        let abort_promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject("time out reject");
            }, timeout);
        });

        // 这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
        // 返回最先执行完的promise
        let abortable_promise = Promise.race([
            fetch_promise,
            abort_promise
        ]);

        return abortable_promise;
    }

}

