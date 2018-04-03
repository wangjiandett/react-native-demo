/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator, TabNavigator} from "react-navigation";
import Home from "./src/tab/home/Home";
import My from "./src/tab/my/My";
import {ViewDemo} from "./src/demos/ViewDemo";
import g_styles from "./src/utils/g_styles";
import g_color from "./src/utils/g_colors";
import ApiDemos from "./src/tab/apidemo/ApiDemos";
import {HomeScreen} from "./src/demos/HomeScreen";
import {ScrollViewDemo} from "./src/demos/ScrollViewDemo";
import {Navigation} from "./src/demos/Navigation";
import {MM, Timer} from "./src/demos/Timer";
import {Flex} from "./src/demos/Flex";
import {FetchDemo} from "./src/demos/FetchDemo";
import {TouchAble} from "./src/demos/TouchAble";
import {TimeInterval} from "./src/demos/TimeInterval";
import {ImagePickers} from "./src/demos/ImagePick";
import {FlatListDemo} from "./src/demos/FlatList";
import {ModalDemo} from "./src/demos/Modal";
import {SectionListComponet} from "./src/demos/SectionListComponet";
import {SlideDemo} from "./src/demos/SlideDemo";
import {Toolbar} from "./src/demos/Toolbar";
import {TextDemo} from "./src/demos/TextDemo";
import {ViewPagerDemo} from "./src/demos/ViewPagerDemo";
import {WebViewDemo} from "./src/demos/WebViewDemo";
import {LocationDemo} from "./src/demos/LocationDemo";
import {WebViewComponent} from "./src/widget/WebViewComponent";
import TabBarItem from "./src/widget/TabBarItem";
import {Goods} from "./src/tab/goods/Goods";
import {Input} from "./src/demos/Input";
import NativeJsChangeMsg from "./src/demos/NativeJsChangeMsg";

export default class App extends Component<{}> {

    render() {
        return (
            <Stack/>

        );
    }
}

const Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {// 此处设置了, 会覆盖组件内的`static navigationOptions`设置.
            headerTitle: "首页",
            // 设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},
            // 是否开启手势滑动返回，android 默认关闭 ios打开
            // gesturesEnabled: true,
            headerBackTitle: null,
            headerStyle: g_styles.headerStyle,//导航栏的样式
            tabBarLabel: "首页",
            headerTitleStyle: g_styles.headerTitleStyle,
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_homepage.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_homepage_selected.png')}
                />
            )
        },
    },
    Goods: {
        screen: Goods,
        navigationOptions: {// 此处设置了, 会覆盖组件内的`static navigationOptions`设置.
            headerTitle: "Goods",
            // 设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},
            // 是否开启手势滑动返回，android 默认关闭 ios打开
            gesturesEnabled: true,
            headerBackTitle: null,
            headerStyle: g_styles.headerStyle,//导航栏的样式
            tabBarLabel: "Goods",
            headerTitleStyle: g_styles.headerTitleStyle,//导航栏文字的样式
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_order.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_order_selected.png')}
                />
            )
        },
    },
    Demos: {
        screen: ApiDemos,
        navigationOptions: {// 此处设置了, 会覆盖组件内的`static navigationOptions`设置.
            headerTitle: "Demos",
            // 设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},
            // 是否开启手势滑动返回，android 默认关闭 ios打开
            gesturesEnabled: true,
            headerBackTitle: null,
            headerStyle: g_styles.headerStyle,//导航栏的样式
            tabBarLabel: "Demos",
            headerTitleStyle: g_styles.headerTitleStyle,//导航栏文字的样式
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_discover.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_discover_selected.png')}
                />
            )
        },
    },
    My: {
        screen: My,
        navigationOptions: {// 此处设置了, 会覆盖组件内的`static navigationOptions`设置.
            headerTitle: "我的",
            // 设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},
            // 是否开启手势滑动返回，android 默认关闭 ios打开
            gesturesEnabled: true,
            headerBackTitle: null,
            headerStyle: g_styles.headerStyle,//导航栏的样式
            tabBarLabel: "我的",
            headerTitleStyle: g_styles.headerTitleStyle,//导航栏文字的样式
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./src/img/tabbar/tabbar_mine.png')}
                    selectedImage={require('./src/img/tabbar/tabbar_mine_selected.png')}
                />
            )
        },
    },
}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: false,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: g_color.blue_1298ff,//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: g_color.black_282828,//label和icon的前景色 活跃状态下（未选中）
        style: g_styles.tabStyle,
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        // header: {  // 导航栏相关设置项
        //     backTitle: '返回',  // 左上角返回键文字
        //     style: {
        //         backgroundColor: '#fff'
        //     },
        //     titleStyle: {
        //         color: 'green'
        //     }
        // },
        // cardStack: {
        //     gesturesEnabled: true
        // }
    },
});

// 此处需要用StackNavigator注册对应的页面，否则StackNavigator不显示
// render() {
//     return (
//         <Tab/> 此时不显示StackNavigator
//
//     );
// }
const Stack = StackNavigator({
    Main: {screen: Tab},
    ApiDemos: {
        screen: ApiDemos,
        navigationOptions: {},  // 此处设置了, 会覆盖组件内的`static navigationOptions`设置
    },
    HomeScreen: {screen: HomeScreen,},
    ScrollViewDemo: {screen: ScrollViewDemo},
    Input: {screen: Input},
    Navigation: {screen: Navigation},
    MM: {screen: MM},
    Flex: {screen: Flex},
    FetchDemo: {screen: FetchDemo},
    TouchAble: {screen: TouchAble},
    Timer: {screen: Timer},
    TimeInterval: {screen: TimeInterval},
    ImagePickers: {screen: ImagePickers},
    FlatListDemo: {screen: FlatListDemo},
    ModalDemo: {screen: ModalDemo},
    SectionListComponet: {screen: SectionListComponet},
    SlideDemo: {screen: SlideDemo},
    Toolbar: {screen: Toolbar},
    ViewDemo: {screen: ViewDemo},
    TextDemo: {screen: TextDemo},
    ViewPagerDemo: {screen: ViewPagerDemo},
    WebViewDemo: {screen: WebViewDemo},
    LocationDemo: {screen: LocationDemo},
    WebView: {screen: WebViewComponent},
    NativeJsChangeMsg: {screen: NativeJsChangeMsg},



});

