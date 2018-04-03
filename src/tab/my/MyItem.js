/**
 * Created by Administrator on 2018/3/30.
 */

import React, {PureComponent} from 'react'
import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import g_color from "../../utils/g_colors";
import g_screen from "../../utils/g_screen";

type Props = {
    onPress: Function,
    imageUri?: any,
    title: String,
}

export default class MyItem extends PureComponent<Props> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {

        const {onPress, imageUri, title} = this.props;
        console.debug("title:" + title)

        return (

            <TouchableOpacity onPress={() => {
                onPress(title);
            }}>

                <View style={styles.container}>
                    <Image source={imageUri} style={styles.image}/>

                    <Text style={styles.text}>{title}</Text>

                    <View style={{flex: 1}}/>

                    <Image style={styles.rightImage} source={require('../../img/my/arrow_right_thin.png')}/>

                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: g_screen.onePixel,
        borderBottomColor: g_color.border,
        paddingLeft: 10,
        paddingRight: 10,

    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        fontSize: 15,
        color: g_color.black_282828,
        marginLeft: 10,
    },

    rightImage: {
        width: 10,
        height: 10,
        resizeMode: 'contain'
    },


})

