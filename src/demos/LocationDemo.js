/**
 * Created by Administrator on 2018/3/15.
 */

import React, {Component} from 'react'
import {View, StyleSheet, Text, PermissionsAndroid} from "react-native";

export class LocationDemo extends Component {
    render() {
        return <LocationD />;
    }
}


export class LocationD extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        };
    }

    componentDidMount() {

        this.requestCameraPermission().then(() => {

            console.debug("requestCameraPermission success")
            // 需要允许获取定位信息，即打开gps
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    var initialPosition = JSON.stringify(position);
                    this.setState({initialPosition});
                },
                (error) => alert(error.message),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );
            this.watchID = navigator.geolocation.watchPosition((position) => {
                var lastPosition = JSON.stringify(position);
                this.setState({lastPosition});
            });

        }).catch(e => {
            console.debug(e.getMessage())
        })
    }

    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': '申请摄像头权限',
                    'message': '一个很牛逼的应用想借用你的摄像头，' +
                    '然后你就可以拍出酷炫的皂片啦。'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("现在你获得摄像头权限了")
            } else {
                console.log("用户并不屌你")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    componentWillUnmount() {
        navigator
            .geolocation
            .clearWatch(
                this.watchID
            )
        ;
    }

    render() {
        return (<View>
            <Text>
                <Text style={styles.title}>Initial position: </Text>
                {this.state.initialPosition}
            </Text>
            <Text>
                <Text style={styles.title}>Current position: </Text>
                {this.state.lastPosition}
            </Text>
        </View>);
    }
}

var styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});










