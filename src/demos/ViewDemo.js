/**
 * Created by Administrator on 2018/3/12.
 */

import React, {Component} from 'react'
import {Text, View, StyleSheet, Image} from "react-native";


export class ViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        return (<View>

            <View style={styles.container}>
                <View style={styles.containerRow}>
                    <View style={{backgroundColor: 'blue', flex: 0.3, height: 50}}/>
                    <View style={{backgroundColor: 'red', flex: 0.5, height: 50}}/>
                    <View style={{backgroundColor: 'yellow', flex: 0.1, height: 50}}/>
                </View>

                <View style={styles.containerColumn}>
                    <View style={{backgroundColor: 'gray', flex: 0.4, width: 50}}/>
                    <View style={{backgroundColor: 'pink', flex: 0.5, width: 50}}/>
                    <View style={{backgroundColor: 'yellow', flex: 0.1, width: 50}}/>
                </View>

            </View>

            <Text style={[styles.text, styles.header]}>
                水平居中
            </Text>

            <View style={{height: 60, backgroundColor: '#333333', alignItems: 'center'}}>
                <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
            </View>

            <Text style={[styles.text, styles.header]}>
                垂直居中
            </Text>
            <View style={{height: 60, backgroundColor: '#333333', justifyContent: 'center'}}>
                <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
            </View>

            <Text style={[styles.text, styles.header]}>
                水平垂直居中
            </Text>
            <View style={{height: 60, backgroundColor: '#333333', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
            </View>

            <View style={styles.flexcontainer}>
                <View style={styles.cellfix}><Text style={styles.welcome}>左边</Text></View>
                <View style={styles.flexcentercell}><Text style={styles.welcome}>中间</Text></View>
                <View style={styles.cellfix}><Text style={styles.welcome}>右边</Text></View>
            </View>


        </View>);
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
    },

    containerRow: {
        width: 100,
        flexDirection: 'row',
    },

    containerColumn: {
        // flex: 1,// 高度
        height: 80,
        flexDirection: 'column',
    },

    ////////=================
    flexcontainer: {
        flexDirection: 'row'
    },

    cellfix: {
        width: 70,
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center'

    },

    flexcentercell: {
        flex: 1,
        height: 40,
        backgroundColor: 'pink',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },


});
