/**
 * Created by Administrator on 2018/3/10.
 */

import React, {Component} from 'react'
import {Dimensions, StyleSheet, ToolbarAndroid, View, WebView} from "react-native";


var {
    height: deviceHeight,
    width: deviceWidth,
} = Dimensions.get("window");


export class WebViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _onLoadStart() {
        console.debug("_onLoadStart")
    }

    _onLoadEnd(){
        console.debug("_onLoadEnd")
    }

    _onLoad(){
        console.debug("_onLoad")
    }

    _renderLoading(){
        console.debug("_renderLoading")
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    onLoadstart={this._onLoadStart()}
                    onLoadend={this._onLoadEnd()}
                    onLoad = {this._onLoad()}
                    renderLoading={this._renderLoading()}
                    startInLoadingState={true}
                    source={{uri: "https://www.baidu.com", method: 'GET'}}
                    // source={{html:"<h1 style='color:#ff0000'>欢迎访问 hangge.com</h1>"}}
                    style={{width: deviceWidth, height: deviceHeight}}>
                </WebView>
            </View>
        );
    }
}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

