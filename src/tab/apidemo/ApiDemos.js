/**
 * Created by Administrator on 2018/3/19.
 */

import React, {Component} from 'react'
import {Text, View, StyleSheet, Button} from "react-native";
import g_styles from "../../utils/g_styles";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {ScrollViewDemo} from "../../demos/ScrollViewDemo";
import {ImagePickers} from "../../demos/ImagePick";
import {Flex} from "../../demos/Flex";
import {SectionListComponet} from "../../demos/SectionListComponet";
import g_color from "../../utils/g_colors";
import {FetchDemo} from "../../demos/FetchDemo";
import {TouchAble} from "../../demos/TouchAble";
import {TimeInterval} from "../../demos/TimeInterval";
import {FlatListDemo} from "../../demos/FlatList";
import {ModalDemo} from "../../demos/Modal";
import {SlideDemo} from "../../demos/SlideDemo";
import {Toolbar} from "../../demos/Toolbar";
import {ViewDemo} from "../../demos/ViewDemo";
import {TextDemo} from "../../demos/TextDemo";
import {ViewPagerDemo} from "../../demos/ViewPagerDemo";
import {WebViewDemo} from "../../demos/WebViewDemo";
import {LocationDemo} from "../../demos/LocationDemo";
import NativeJsChangeMsg from "../../demos/NativeJsChangeMsg";


export default class ApiDemos extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            mount: false
        };
    }


    componentDidMount() {
        //
        // 延迟加载页面防止页面不显示
        //
        setTimeout(()=>{
            this.setState({
                mount:true
            })
        },200)

    }


    renderView() {
        return ( <ScrollableTabView
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
            tabBarActiveTextColor={g_color.blue_1298ff}
            tabBarUnderlineStyle={{backgroundColor: g_color.blue_1298ff}}
            pre
        >

            <NativeJsChangeMsg tabLabel="NativeJsChangeMsg"/>

            {/*// 子页面中不能使用如下方法，因为子页面没有使用StackNavigator进行加载*/}
            {/*// 需要将navigation传递进来*/}
            <Flex tabLabel="Flex" navigation={this.props.navigation}/>

            <FetchDemo tabLabel="FetchDemo"/>
            <ScrollViewDemo tabLabel="ScrollViewDemo"/>
            <TouchAble tabLabel="TouchAble"/>
            <ImagePickers tabLabel="ImagePickers"/>
            <SectionListComponet tabLabel="SectionListComponet"/>
            <TimeInterval tabLabel="TimeInterval"/>
            <FlatListDemo tabLabel="FlatListDemo"/>
            <ModalDemo tabLabel="ModalDemo"/>
            <SlideDemo tabLabel="SlideDemo"/>
            <Toolbar tabLabel="Toolbar"/>
            <ViewDemo tabLabel="ViewDemo"/>
            <TextDemo tabLabel="TextDemo"/>
            <ViewPagerDemo tabLabel="ViewPagerDemo"/>
            <WebViewDemo tabLabel="WebViewDemo"/>
            <LocationDemo tabLabel="LocationDemo"/>


        </ScrollableTabView>)
    }

    render() {

        return (
            <View style={g_styles.container}>

                {this.state.mount ? this.renderView() : null}

            </View>
        );
    }
}
