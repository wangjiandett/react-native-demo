/**
 * Created by Administrator on 2018/3/19.
 */

import React, {PureComponent} from 'react'
import {Text, View, StyleSheet, ToastAndroid} from "react-native";
import MyItem from "./MyItem";
import MyHeader from "./MyHeader";
import NavigationItem from "../../widget/NavigationItem";


export default class My extends PureComponent {

    static navigationOptions = ({navigation}: any) => ({

        headerRight: (<NavigationItem
            onPress={() => {
                ToastAndroid.show("设置", ToastAndroid.SHORT)
            }}
            icon={require('../../img/my/icon_navigation_item_set_white.png')}
        />),
        headerLeft: (<NavigationItem
            onPress={() => {

            }}
            icon={null}
        />),
    });

    render() {
        return (<View style={styles.container}>

                <MyHeader headerImage={require('../../img/my/icon_new_friends.png')}
                          nickname="圆圆"
                          id="123456"
                          onPress={(id) => {
                              ToastAndroid.show("用户信息", ToastAndroid.SHORT)
                          }}/>

                <View style={{height: 10}}/>

                {this.renderItem()}

            </View>
        );
    }

    renderItem() {
        let items = [];

        let data = this.getDataList();

        data.map((item) => {
            items.push(
                <MyItem key={item.title}
                        title={item.title}
                        onPress={(title) => {
                            console.debug(title)
                            ToastAndroid.show(title, ToastAndroid.SHORT)
                        }}
                        imageUri={item.image}/>
            )
        });

        return items;
    }


    getDataList() {
        return [
            {title: '我的钱包', image: require('../../img/my/icon_mine_voucher.png')},
            {title: '余额', image: require('../../img/my/icon_mine_voucher.png')},
            {title: '抵用券', image: require('../../img/my/icon_mine_voucher.png')},
            {title: '会员卡', image: require('../../img/my/icon_mine_voucher.png')}
        ]
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
    }
});
