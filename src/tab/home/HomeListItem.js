/**
 * Created by Administrator on 2018/3/23.
 */

import React, {PureComponent} from 'react'
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import g_color from "../../utils/g_colors";
import g_screen from "../../utils/g_screen";
import moment from "moment";

type Props = {
    info: Object,
    onPress: Function,
}

export default class HomeListItem extends PureComponent<Props> {
    // 构造
    constructor(props) {
        super(props);
    }

    render() {

        let {info} = this.props;

        return (
            <TouchableOpacity
                onPress={() => {
                    // ToastAndroid.show("TouchableOpacity value", ToastAndroid.SHORT)
                    // 跳转并传递参数
                    this.props.onPress(info);
                }}>

                <View style={styles.item_container}>
                    <Image source={{uri: info.vpic}} style={styles.item_image}/>

                    <View style={styles.item_container_text}>

                        <Text style={styles.item_text_title}>{info.shortTitle}</Text>

                        <Text style={styles.item_text_child}>
                            时间：{moment(info.publishTime).format('YYYY-MM-DD HH:mm:ss')}
                        </Text>

                        <Text style={styles.item_text_child}>时长：{Math.ceil(info.timeLength / 60)}m</Text>

                        <Text
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            style={styles.item_text_child}>
                            描述：{info.vt}
                        </Text>

                    </View>
                </View>

            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({

    item_container: {
        flex: 1,
        height: 100,
        backgroundColor: g_color.white,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    item_container_text: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 8,
    },

    item_image: {
        height: 80, width: 150,
        resizeMode: 'cover',
    },

    item_text_title: {
        color: g_color.black_282828,
        fontSize: 15,
        marginTop: 3,
        fontWeight: 'bold',
    },
    item_text_child: {
        color: g_color.black_989898,
        fontSize: 13,
        marginTop: 3,
        // 字体的宽度为 屏幕宽度 - 图片宽度 - 左右padding 10
        width: g_screen.width - 150 - 20,
    },

})
