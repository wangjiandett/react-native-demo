/**
 * Created by Administrator on 2018/3/30.
 */

import React, {PureComponent} from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import g_color from "../../utils/g_colors";

type Props = {
    onPress: Function,
    headerImage?: any,
    nickname: String,
    id: String
}

export default class MyHeader extends PureComponent<Props> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        const {onPress, headerImage, nickname, id} = this.props;

        return (

            <TouchableOpacity onPress={() => onPress(id)}>
                <View style={styles.container}>

                    <Image style={styles.image}
                           source={headerImage}
                    />

                    <View style={styles.subContainer}>
                        <Text style={styles.textName}>昵称：{nickname}</Text>
                        <Text style={styles.textId}>ID：{id}</Text>
                    </View>

                    <View style={{flex: 1}}/>

                    <Image style={styles.imageRight}
                           source={require('../../img/my/arrow_right_thin.png')}
                    />

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,

    },

    subContainer: {
        height: 90,
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center'
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    textName: {
        fontSize: 18,
        color: g_color.black_282828,
    },

    textId: {
        fontSize: 15,
        marginTop: 5,
        color: g_color.black_989898,
    },
    imageRight: {
        width: 20,
        height: 20,
    }
})

