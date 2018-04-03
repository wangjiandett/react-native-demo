/**
 * Created by Administrator on 2018/3/21.
 */
import {StyleSheet} from 'react-native'
import g_colors from "./g_colors";


/**
 * 全局公用样式定义
 */
export default StyleSheet.create({

    //
    //字体样式
    //

    // 常规字体样式
    normal_text: {
        color: g_colors.black_282828,
        fontSize: 14,
    },

    //
    // StackNavigator样式
    //

    // 背景颜色
    headerStyle: {
        backgroundColor: g_colors.blue_1298ff
    },
    // 字体样式
    headerTitleStyle: {
        color: g_colors.white,
        //设置标题的大小
        fontSize: 16,
        //居中显示
        alignSelf: 'center',
    },


    //
    // TabNavigator
    //

    tabStyle:{
        backgroundColor: 'white',
        height: 55,
    },
    tabBarIcon: {
        width: 24,
        height: 24,
    },

    //
    //布局样式样式
    //

    flex_1: {
        flex: 1,
    },

    // 全屏居中容器样式
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

