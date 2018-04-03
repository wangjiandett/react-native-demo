/**
 * Created by Administrator on 2018/2/24.
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from "react-native";

export class TimeInterval extends Component {

    constructor(props) {
        super(props);
        this.state = {change: true};
    }


    startTimerInterval() {

        if (this.timeInterval) {
            console.debug("this.timeInterval is not null")
            return;
        }


        this.timeInterval = setInterval(() => {
            this.setState(prev => {
                return {change: !prev.change};
            });
        }, 1000)
    }

    endTimerInterval() {
        this.timeInterval && clearInterval(this.timeInterval);
    }


    componentDidMount() {
        this.endTimerInterval();
    }


    render() {

        let currStyle = this.state.change ? myStyle.dark : myStyle.light;

        return (

            <View>

                <View style={myStyle.itemBg}>
                    <Text style={currStyle}>
                        setInterval
                    </Text>

                    <View style={myStyle.btn}>
                        <Button title="开始" onPress={() => this.startTimerInterval()}/>
                    </View>

                    <View style={myStyle.btn}>
                        <Button title="结束" onPress={() => this.endTimerInterval()}/>
                    </View>

                </View>

            </View>

        );
    };
}

const myStyle = StyleSheet.create({

    light: {
        backgroundColor: '#666666',
        flex: 1,
    },

    dark: {
        backgroundColor: '#ff5454',
        flex: 1,
    },

    btn: {
        marginLeft: 10,
        flex: 1,
    },

    itemBg: {
        flexDirection: 'row',
        marginTop: 10,
    },
});

