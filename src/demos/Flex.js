/**
 * Created by Administrator on 2018/2/9.
 */
import React, {Component} from 'react';

import {View, StyleSheet, Button} from "react-native";

export class Flex
    extends Component {
    static navigationOptions = {
        title: 'Welcome',
        cardStack: {
            gesturesEnabled: true  // 是否可以右滑返回
        }
    };

    render() {
        return (

            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>

                <Button onPress={() => {
                    // 子页面中不能直接使用如下方法，因为子页面没有使用StackNavigator进行加载
                    // 需要将navigation以属性方式传递进来
                    // 如：apidemos中  <Flex tabLabel="Flex" navigation={this.props.navigation}/>
                    this.props.navigation.navigate("HomeScreen")
                }} title="api demos"/>


                {/*// 试试去掉父View中的`flex: 1`。*/}
                {/*// 则父View不再具有尺寸，因此子组件也无法再撑开。*/}
                {/*// 然后再用`height: 300`来代替父View的`flex: 1`试试看？*/}
                <View style={MyStyle.parent}>

                    <View style={MyStyle.item1}/>
                    <View style={MyStyle.item2}/>
                    <View style={MyStyle.item3}/>

                </View>
            </View>


        );
    }
}


const MyStyle = StyleSheet.create({

    parent: {
        width: 100,// 宽度
        height:100,
        flexDirection: 'row',// 排列方向
        justifyContent: 'center',// 主轴排列方式
        alignItems: 'center',// 次轴排列方式（与主轴垂直的轴）
        marginTop:10,
    },

    item1: {
        width: 48,
        height: 48,
        backgroundColor: '#ff5454'
    },
    item2: {
        width: 48,
        height: 48,
        backgroundColor: '#1298ff'
    },
    item3: {
        width: 48,
        height: 48,
        backgroundColor: '#f43f28'
    }

});