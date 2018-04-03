import React, {PureComponent} from 'react'
import {Button, View, DeviceEventEmitter, Text} from "react-native";

import ToastDemo from './ToastDemo'

import ChangeMsgModule from '../demos/NativeJsChange'

let self;

export default class NativeJsChangeMsg extends PureComponent {

    // 构造
    constructor(props) {
        super(props);
        self = this;

        // 初始状态
        this.state = {
            text: ""
        };
    }

    componentDidMount() {

        /**
         * 接收native 返回的消息
         * 此处的EventName必须与android发送端保持相同
         */
        DeviceEventEmitter.addListener('EventName', function (msg) {
            console.log(msg);
            self.setState({
                text: msg.key
            })
        });
    }


    _onPressDeviceEvent() {
        console.log("_onPress_ChangeMsgModule");
        // 调用android native 方法
        ChangeMsgModule.getData();
    }

    _callback(){
        ChangeMsgModule.callBackTime("js call back", (msg)=>{
            self.setState({
                text: msg
            })
        })
    }

    _getPromiseData() {
        ChangeMsgModule.getPromiseData("promise").then(msg => {
            self.setState({
                text: "name:"+msg.name+" ,age:"+msg.age
            })
        }).catch(error=>{
            console.debug(error)
        })
    }

    _getNormalData(){
        let name = ChangeMsgModule.name;
        let age = ChangeMsgModule.age;
        self.setState({
            text: "name:"+name+" ,age:"+age
        })

    }

    render() {
        return (<View>
            <Text style={{fontSize: 16, height:50}}>消息：{this.state.text}</Text>

            <Text style={{fontSize: 16, marginTop:10}}>DeviceEventEmitter方式</Text>
            <Button
                title="点击获取native消息" onPress={() => this._onPressDeviceEvent()}/>

            <Text style={{fontSize: 16, marginTop:10}}>callback方式</Text>
            <Button
                title="点击获取native消息" onPress={() => this._callback()}/>

            <Text style={{fontSize: 16, marginTop:10}}>Promise方式</Text>
            <Button
                title="点击获取native消息" onPress={() => this._getPromiseData()}/>

            <Text style={{fontSize: 16, marginTop:10}}>常量方式</Text>
            <Button
                title="点击获取native消息" onPress={() => this._getNormalData()}/>
        </View>)
    }


}







