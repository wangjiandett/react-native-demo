/**
 * Created by Administrator on 2018/3/23.
 */


import React, {PureComponent} from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import g_screen from "../../utils/g_screen";
import g_color from "../../utils/g_colors";

type Props = {
    info: Object,
    onPress:Function,
}

export class GoodsItem extends PureComponent<Props> {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        let {info, onPress} = this.props;
       // console.log("GoodsItem_info：" + info.imageUrl)
        let imageUrl = info.imageUrl.replace('w.h', '160.0')

        return (
            <TouchableOpacity onPress={() => {
                console.debug("onPress:" + imageUrl)
                onPress(info);
            }}>

                <View style={styles.container}>

                    <Image source={{uri: imageUrl}} style={styles.image}/>

                    <View style={styles.rightContainer}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            style={styles.title}>
                            {info.title}
                        </Text>

                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.subtitle}>
                            {info.subtitle}
                        </Text>

                        <Text style={styles.price}>{info.price}元</Text>

                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: g_color.white,
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },

    rightContainer: {
        marginLeft: 8,
        width: g_screen.width - 24 - 80,
    },

    title: {
        fontSize: 17,
        color: g_color.black_282828,
        marginTop: 3,
    },

    subtitle: {
        fontSize: 14,
        color: g_color.black_989898,
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        color: g_color.primary,
        marginTop: 5,
    }
})

