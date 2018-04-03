/**
 * Created by Administrator on 2018/2/9.
 */

import React, {Component} from 'react';

import {Text, View} from "react-native";
import {FetchComponent} from "./FetchComponent";

export class FetchDemo extends FetchComponent {

    constructor(props) {
        super(props);

        // set default state
        this.state = {
            text: "loading..."
        }
    }

    // demo 1
    async getWeatherJson1(value) {
        return fetch("https://www.baidu.com", {
            method: 'post',
            header: {'Content-Type': 'application/x-www-form-urlencoded',// 发送消息类型（form）
                'Accept': 'application/json',// 接收消息类型(json)
            },
            body: 'key1=value1&key2=' + value
        }).then((resp) => resp.json)
            .then((respJson) => {
                return respJson
            })
            .catch((error) => {
                console.debug(error);
            });
    }

    // demo 2
    async getWeatherJson2() {
        try {
            let response = await fetch("https://mywebsite.com/endpoint/");
            // let response = await data.json();
            return response
        } catch (error) {
            console.error(error);
        }
    }

    // demo 3
    testTimeOut() {
        //usage:
        const timeOutUrl = 'https://mywebsite.com/endpoint/';
        const url = 'http://www.weather.com.cn/data/cityinfo/101190408.html';

        let self = this;

        self._fetch(fetch(url), 2000)
            .then((response)=> response.json())// 过滤掉头部信息
            .then(function (res) {
                let textValue = JSON.stringify(res);
                console.log("_fetch: " + textValue);

                self.setState({
                    text: textValue,
                });

            }).catch(function (error) {
                console.log("_fetch error: " + error);
        });
    }


    // 发送ajax请求，加载数据
    ajaxRequestDemo(){

        const url = 'http://www.weather.com.cn/data/cityinfo/101190408.html';

        const request = new XMLHttpRequest();
        request.onreadystatechange  = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                console.log('ajax_success', request.responseText);
            } else {
                console.warn('ajax_error');
            }
        };


        request.open('GET', url);
        request.send();
    }




    // 组件加载完成后，发送请求加载数据
    componentDidMount() {
        this.testTimeOut();
        this.ajaxRequestDemo();
    }

    render() {

        return (
            <View>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}
