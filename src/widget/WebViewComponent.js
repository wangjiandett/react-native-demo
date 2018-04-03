/**
 * Created by Administrator on 2018/3/10.
 */

import React, {Component} from 'react'
import {Dimensions, StyleSheet, ToolbarAndroid, View, WebView} from "react-native";


var {
    height: deviceHeight,
    width: deviceWidth,
} = Dimensions.get("window");

let url;

export class WebViewComponent extends Component {

    static navigationOptions={
        headerTitle: '详情',
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        // 页面加载完成，处理参数
        url = this.props.navigation.state.params.url
    }

    render() {
        let url = this.props.navigation.state.params.url
        return (
            <View style={styles.container}>
                <WebView
                    startInLoadingState={true}
                    source={{uri: url, method: 'GET'}}
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

