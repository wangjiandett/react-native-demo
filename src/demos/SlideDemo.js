/**
 * Created by Administrator on 2018/3/8.
 */

import React, {Component} from 'react'
import {StyleSheet, Slider, StatusBar, Switch, Text, View} from "react-native";

export class SlideDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isOn: true
        };
    }


    _onlongpress() {
        console.debug("_onlongpress")
    }

    _onpress() {
        console.debug("_onpress")
    }


    render() {
        return (<View style={{flex: 1}}>


            <StatusBar
                animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                hidden={false}  //是否隐藏状态栏。
                backgroundColor={'black'} //状态栏的背景色
                //translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。

                //default - 默认的样式（IOS为白底黑字、Android为黑底白字）
                //light-content - 黑底白字
                //dark-content - 白底黑字
                barStyle={'light-content'}
            >
            </StatusBar>

            <Slider/>
            <Slider disabled={true}/>
            <Slider maximumTrackTintColor='yellow'/>
            <Slider minimumTrackTintColor='red'/>
            <Slider style={{borderWidth: 1, borderColor: 'red'}}/>


            <Text>{this.state.value}</Text>

            <Slider minimumValue={5} maximumValue={20} onValueChange={(value) => {
                this.setState({value: value})
            }} onSlidingComplete={(value) => {
                this.setState({value: value})
            }}/>


            <Switch
                style={{width: 50}}
                // disabled={true}//是否可以响应,默认为false,true是无法点击
                onTintColor='blue'  //开启时的背景颜色
                thumbTintColor='yellow' //开关上原形按钮的颜色
                tintColor='black' //关闭时背景颜色
                onValueChange={() => this.setState({isOn: !this.state.isOn})} //当状态值发生变化值回调
                value={this.state.isOn}//默认状态
            />


        </View>);
    }
}

