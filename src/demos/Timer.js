/**
 * Created by Administrator on 2018/2/6.
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

export class Timer extends Component {

    static navigationOptions = {
        title: "first"
    };

    render() {
        const {goBack} = this.prototype.navigation;

        return (
            <View>
                <Text>name is {this.props.name}</Text>

                <Button title="go back" onPress={() => goBack() }/>
            </View>
        );
    }
}


export class MM extends Component {
    constructor(props) {
        super(props);
        this.state = {change: true};

        // setInterval(() => {
        //     this.setState(prev => {
        //         return {change: !prev.change};
        //     });
        // }, 1000)
    }


    render() {

        let currStyle = this.state.change ? ViewStyle.dark : ViewStyle.light;

        return (
            <Text style={currStyle}>
                show text
            </Text>
        );
    }
}


export class MMs extends Component {


    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            console.debug("showText:" + this.state.showText)
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? "show" : 'hide';
        let styles = this.state.showText ? ViewStyle.light : ViewStyle.dark;
        return (
            <Text style={styles}>{display}</Text>
        );
    }
}

//自定义样式，里面可以指定多个样式，使用时 ViewStyle.myStyle 即可
const ViewStyle = StyleSheet.create({

    light: {
        backgroundColor: '#666666',
    },
    dark: {
        backgroundColor: '#ff5454',
    }
});


