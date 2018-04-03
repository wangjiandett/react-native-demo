/**
 * Created by Administrator on 2018/3/23.
 */

import React, {PureComponent} from 'react'
import {View} from "react-native";
import {GoodsItem} from "./GoodsItem";
import Api from "../../Api";
import g_network from "../../utils/g_network"
import RefreshListView, {RefreshState} from "react-native-refresh-list-view";
import Separator from "../../widget/Separator";


export class Goods extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
        };
    }


    keyExtractor = (item: Object, index: number) => {
        return index + "";
    }

    _renderItem = (itemData) => {
        return <GoodsItem
            info={itemData.item}
            onPress={(info) => {
                console.debug('info:' + info.imageUrl)
            }
            }
        />
    }

    componentDidMount() {
        this.onHeaderRefresh();
    }

    onHeaderRefresh = () => {
        this.getData(true);
    }

    onFooterRefresh = () => {
        this.getData(false);
    }

    getData = (isRefresh) => {
        this.setState({
            refreshState: isRefresh ? RefreshState.HeaderRefreshing : RefreshState.FooterRefreshing,
        });

        console.log("onFooterRefresh")
        g_network.get(Api.recommend, null, null).then((response) => {
            console.log("goods_response:" + response)

            let data = response.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            );


            this.setState({
                dataList: isRefresh ? data : [...this.state.dataList, ...data],
                refreshState: isRefresh ? RefreshState.Idle :
                    (this.state.dataList.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle),
            });
        }).catch((e) => {
            console.log("goods_response:" + "catch")

            this.setState({
                refreshState: RefreshState.Failure
            });
        })
    }

    render() {
        return (
            <View>
                <RefreshListView
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    renderItem={this._renderItem}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}
                    ItemSeparatorComponent={() => <Separator/>}
                />
            </View>);
    }
}