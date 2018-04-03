/**
 * Created by Administrator on 2018/1/8.
 */
import React, {Component} from 'react';
import {Button, Image, RefreshControl, ScrollView, Text, View} from "react-native";
import {Input} from "./Input";
export class ScrollViewDemo extends Component {
    static navigationOptions = {
        title: 'ScrollView',
    };

    constructor(props) {
        super(props);
        this.state = {isRefreshing: false}
    }

    _refresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 2000)
    }


    render() {
        return (
            <ScrollView
                keyboardDismissMode="on-drag"
                showsverticalscrollindicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._refresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />}>


                {/*加载资源文件*/}
                <Text> 加载自定义目录资源文件 </Text>
                <Image source={require('../img/im.png')}/>

                {/*// 项目中放新图片 要重新运行，android 只能显示drawable中的图片，mipmap中的不显示*/}

                {/*// 加载ios或android drawable中的图片资源*/}
                {/*// 必须设置宽高*/}
                <Text> 加载android or ios 资源文件 </Text>
                <Image source={{uri:'pic'}} style={{width:150, height:150}}/>

                {/*加载sdcard中的图片，需要使用 file:/// 开头 */}
                <Text> 加载sdcard资源文件 </Text>
                <Image source={{uri:'file:///storage/emulated/0/DCIM/Camera/IMG_20180315_095325.jpg'}}
                       style={{width:150, height:150}}/>

                <View>
                    {/*===========normal============*/}
                    <Text> 加载网络资源文件 </Text>
                    <Text> 100px height </Text>

                    <Image style={{height: 100}}
                           source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}}/>

                    {/*===========contain============*/}
                    <Text> 100px height with resizeMode contain </Text>

                    <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                        <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.contain}}
                               source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}}/>
                    </View>

                    {/*===========cover============*/}
                    <Text> 100px height with resizeMode cover </Text>

                    <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                        <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.cover}}
                               source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}}/>
                    </View>

                    {/*===========stretch============*/}
                    <Text> 100px height with resizeMode stretch </Text>

                    <View style={[{flex: 1, backgroundColor: '#fe0000'}]}>
                        <Image style={{flex: 1, height: 100, resizeMode: Image.resizeMode.stretch}}
                               source={{uri: 'http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png'}}/>
                    </View>

                </View>

                <Image
                    source={{uri: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4012465425dda3cc0be4bf2639d25e3c/b64543a98226cffc15336079b2014a90f703eae4.jpg'}}
                    style={{width: 140, height: 140, marginLeft: 8, marginRight: 8}}/>

            </ScrollView>
        );
    }
}
