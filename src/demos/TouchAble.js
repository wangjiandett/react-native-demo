/**
 * Created by Administrator on 2018/2/12.
 */

import React, {Component} from 'react';
import {
    Text, TouchableHighlight, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback,
    Button, DrawerLayoutAndroid, Image
} from "react-native";
import ToastDemo from "./ToastDemo";

export class TouchAble extends Component {


    constructor(props) {
        super(props);
    }

    _onPressButton(value) {
        console.log("TouchableOpacity")
        ToastDemo.show("TouchableOpacity value=" + value, ToastDemo.SHORT)
    }

    _onImagePress() {
        console.log("_onImagePress")
        ToastDemo.show("_onImagePress value", ToastDemo.SHORT)
    }

    _onShowUnderlay() {
        ToastDemo.show("_onShowUnderlay value", ToastDemo.SHORT)
    }

    _onHideUnderlay() {
        ToastDemo.show("_onHideUnderlay value", ToastDemo.SHORT)
    }

    _feedback() {
        ToastDemo.show("_feedback value", ToastDemo.SHORT)
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>右滑关闭</Text>
            </View>
        );

        return (
            // TouchableOpacity
            // TouchableHighlight
            // TouchableNativeFeedback

            <View>
                <View style={styles.text}>
                    <TouchableOpacity >
                        <Button title="click me1" onPress={() => this._onPressButton(1)}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.text}>
                    <TouchableOpacity >
                        <Button title="click me2" onPress={() => this._onPressButton(2)}/>
                    </TouchableOpacity>
                </View>

                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor='white'
                    onHideUnderlay={this._onHideUnderlay}
                    onShowUnderlay={this._onShowUnderlay}
                    onPress={this._onImagePress}>
                    <Image source={require('../img/im.png')}/>
                </TouchableHighlight>

                <View style={styles.text}>
                    <DrawerLayoutAndroid
                        drawerWidth={100}
                        drawerPosition={DrawerLayoutAndroid.positions.Right}
                        renderNavigationView={() => navigationView}
                        onDrawerOpen={() => {
                            console.log('打开了')
                        }}
                        onDrawerClose={() => {
                            console.log('关闭了')
                        }}>

                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>左滑打开</Text>
                        </View>
                    </DrawerLayoutAndroid>
                </View>

                <TouchableNativeFeedback
                    onPress={this._feedback}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{
                        width: 200,
                        height: 60,
                        backgroundColor: 'red',
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{margin: 30}}>feed back 1</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={this._feedback}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{
                        width: 200,
                        height: 60,
                        backgroundColor: 'green',
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{margin: 30}}>feed back 2</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    text: {
        height: 50,
        backgroundColor: '#d8d8d8',
        marginTop: 10,
    }


});


