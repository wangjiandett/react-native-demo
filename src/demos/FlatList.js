/**
 * Created by Administrator on 2018/3/6.
 */

import React, {Component} from 'react';
import {Dimensions, ToastAndroid, StyleSheet, Button, FlatList, Text, View} from "react-native";

const {width, height} = Dimensions.get('window')

export class FlatListDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        this.state = {title:"滚动到指定位置"}
    }

    refreshing() {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            ToastAndroid.show('刷新成功', ToastAndroid.SHORT)
        }, 3500)
    }

    _onLoadMore() {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            ToastAndroid.show('加载成功', ToastAndroid.SHORT)
        }, 500)
    }

    _scrollToOffset(){
        this._flatList.scrollToOffset({animated: true, offset: 2000});
        this.setState({title:"滚动成功"})
    }

    render() {
        let data = [];
        for (let i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''});
        }

        return (
            <View style={{flex: 1}}>
                <Button
                    ref={(btn)=>this._button = btn}
                    title={this.state.title}
                    onPress={this._scrollToOffset.bind(this)}/>

                <View style={{flex: 1}}>
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        // 同时存在
                        onRefresh={this.refreshing}
                        refreshing={false}
                        // 同时存在
                        onEndReachedThreshold={0.1}
                        onEndReached={
                            this._onLoadMore
                        }

                        numColumns={3}
                       // columnWrapperStyle={{borderWidth: 2, borderColor: 'black', paddingLeft: 20}}

                        // horizontal={true}

                        getItemLayout={(data, index) => (
                            {length: 100, offset: (100 + 2) * index, index}
                        )}

                        data={data}>
                    </FlatList>
                </View>

            </View>
        );
    }


    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{flex: 1, height: 100, backgroundColor: bgColor}, styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
    }


}
const styles = StyleSheet.create({
    container: {},
    content: {
        width: width,
        height: height,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell: {
        height: 100,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ececec',
        borderBottomWidth: 1

    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }

})
