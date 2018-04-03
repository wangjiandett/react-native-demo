/**
 * Created by Administrator on 2018/3/13.
 */
import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";

export class TextDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (<View>

            {/*========================*/}
            <Text>根节点上放一个元素，不设置宽度</Text>

            <View style={{height: 20, backgroundColor: '#333333'}}/>

            {/*========================*/}
            <Text>固定宽度的元素上放一个View，不设置宽度</Text>

            <View style={{width: 100}}>
                <View style={{height: 20, backgroundColor: '#333333'}} />
            </View>

            {/*========================*/}
            <Text>flex的元素上放一个View，不设置宽度</Text>

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <View style={{height: 20, backgroundColor: '#333333'}} />
                </View>
                <View style={{flex: 1, backgroundColor: 'pink'}}/>
            </View>

            <Text
                style={{
                    fontSize: 20,
                    color: 'blue',
                    fontWeight: 'bold',
                    // 阴影
                    textShadowOffset: {width: 2, height: 2},
                    // 阴影颜色
                    textShadowColor: 'gray',
                    lineHeight: 25,
                }}
                // numberOfLines 和 selectable不能同时使用，否则numberOfLines最后的省略号会消失
                //selectable={true}
                numberOfLines={3}
                onLongPress={() => {
                    alert("onlongpress")
                }}
                onPress={() => {
                    alert("onPress")
                }}>
                发的发的发的发地方的地方地方地方地方地方的发的发的发的发地方的地方地方地方地方地方的发的发的发的发地方的地方地方地方地方地方的
                发的发的发的发地方的地方地方地方地方地方的发的发的发的发地方的地方地方地方地方地方的发的发的发的发地方的地方地方地方地方地方的
            </Text>


            <Text style={{textAlign: 'auto'}}>文字自动对齐auto</Text>
            <Text style={{textAlign: 'left'}}>文字左对齐left</Text>
            <Text style={{textAlign: 'center'}}>文字居中对齐center</Text>
            <Text style={{textAlign: 'right'}}>文字右对齐right</Text>
            <Text style={{textAlign: 'justify'}}>文字justify对齐</Text>

            <Text style={{textDecorationLine: 'underline'}}>文字underline</Text>
            <Text style={{textDecorationLine: 'line-through'}}>文字line-through</Text>
            <Text style={{
                textDecorationLine: 'line-through',
                textDecorationColor: 'red'
            }}>文字line-through</Text>

            <View style={styles.container}>
                <Text style={styles.textStyle}>字体样式
                    <Text style={{color:'gray'}}>内部字体</Text></Text>

            </View>

        </View>);
    }
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center'
    },

    textStyle: {
        fontSize:30,
        color:'black'
    }
});