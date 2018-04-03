/**
 * Created by Administrator on 2018/3/19.
 */

import React, {PureComponent} from 'react'
import {Text, View, StyleSheet, FlatList, Image, TouchableOpacity, ToastAndroid, ViewPagerAndroid} from "react-native";
import {fetchData} from "../../utils/g_net";
import Separator from "../../widget/Separator";
import HomeListItem from "./HomeListItem";
import HomeListHeader from "./HomeListHeader";


let self;

export default class Home extends PureComponent {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            refreshing: false,
            dataList: [],
            headDateList: [],
        };
        self = this;
    }


    componentDidMount() {
        this._loadData();
    }

    _loadData = () => {
        this.setState({
            refreshing: true
        })
        fetchData("http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=jsonp9")
            .then((json) => {
                let array = json.data.vlist;

                let headerList = [];

                for (let i = 0; i <= 4; i++) {
                    headerList.push(array[i])
                }

                this.setState({
                    refreshing: false,
                    dataList: array,
                    headDateList: headerList,
                })
            });
    }

    _refreshing = () => {
        self._loadData();
    }

    _keyExtractor = (item, index) => item.id+"";

    _onEndReached=()=>{
        console.debug("reach end")
    }

    render() {
        return (<View>

            <FlatList
                style={styles.flatList}
                ref={(flatList) => this._flatList = flatList}
                ItemSeparatorComponent={() => <Separator/>}
                ListHeaderComponent={()=>{
                   return this.state.headDateList ? this._renderHeader() : <View/>
                }}
                renderItem={this._renderItem}
                // 同时存在
                onRefresh={this._refreshing}
                refreshing={this.state.refreshing}
                // 必须设置，否则异常
                keyExtractor={this._keyExtractor}

                removeClippedSubviews={false}

                // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，
                // 例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
                onEndReachedThreshold={0.1}
                // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
                onEndReached={ this._onEndReached }


                numColumns={1}
                // columnWrapperStyle={{borderWidth: 2, borderColor: 'black', paddingLeft: 20}}
                // horizontal={true}

                // 是一个可选的优化，用于避免动态测量内容，+1是加上分割线的高度
                getItemLayout={(data, index) => (
                    {length: 100, offset: (100 + 1) * index, index}
                )}

                data={this.state.dataList}>
            </FlatList>
        </View>);
    }

    /**
     * 使用箭头函数防止不必要的re-render；
     * 如果使用bind方式来绑定_renderItem，每次都会生成一个新的函数，导致props在===比较时返回false，
     * 从而触发自身的一次不必要的重新render，也就是HomeListItem组件每次都会重新渲染。
     *
     */
    _renderItem = (data) => {
        return (
            <HomeListItem
                info={data.item}
                onPress={(info) => self.props.navigation.navigate("WebView", {url: info.vurl})}
            />
        )
    }

    _renderHeader = () => {
        return (
            <HomeListHeader
                data={this.state.headDateList}
                onPress={(info) => self.props.navigation.navigate("WebView", {url: info.vurl})}
            />
        )
    }

}

const styles = StyleSheet.create({
    flatList: {
        marginTop: 0,
    },
    pageStyle: {
        flex:1,
        alignItems: 'center',
        padding: 20,
        height:'80%',
        justifyContent:'center',
        backgroundColor:'gray'
    }
})
