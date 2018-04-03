/**
 * Created by Administrator on 2018/3/27.
 */

import React, {PureComponent} from 'react'
import {Image, View, ViewPagerAndroid, StyleSheet, TouchableOpacity, Text} from "react-native";
import g_screen from "../../utils/g_screen";

type Props = {
    data: [],
    onPress:Function,
}

let self

export default class HomeListHeader extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this._renderPagers = this._renderPagers.bind(this);
        this._renderCircles = this._renderCircles.bind(this);
        this._onPageSelected = this._onPageSelected.bind(this);
        self = this;
        this.state = {
            currentPage: 0
        };
    }

    render() {
        return (
            <View>
                <ViewPagerAndroid
                    initialPage={1}
                    style={{height: 150}}
                    ref={viewPager => {
                        this.viewPager = viewPager;
                    }}
                    onPageSelected={this._onPageSelected}
                >
                    {this._renderPagers()}
                </ViewPagerAndroid>
                {this._renderCircles()}
            </View>
        );
    }

    _renderPagers() {
        const imageUrls = this.props.data;
        if (imageUrls == null || imageUrls.length == 0) {
            return null;
        }

        let len = imageUrls.length;
        let pagers = [];

        if (len == 1) {
            pagers.push(this._renderPagerItem(imageUrls[0], 0));
        } else {
            // 最后一页插入到第 0 个位置
            pagers.push(this._renderPagerItem(imageUrls[len - 1], 0));
            for (let i = 0; i < len; i++) {
                pagers.push(this._renderPagerItem(imageUrls[i], i + 1))
            }
            // 第 0 页插入到最后一个位置
            pagers.push(this._renderPagerItem(imageUrls[0], len + 1));
        }

        return pagers;
    }

    _renderPagerItem(item, key) {
        return (
            <View key={key} style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {
                    console.debug("_renderPagerItem click")
                    this.props.onPress(item);
                }}>
                    {/*此处的iamge需要设置宽高否则不显示*/}
                    <Image source={{uri: item.vpic}} style={styles.image}/>

                </TouchableOpacity>
            </View>
        );
    }

    _renderCircles() {
        const imageUrls = this.props.data;
        if (imageUrls == null || imageUrls.length <= 1) {
            return null;
        }

        let len = imageUrls.length;
        let circles = [];
        for (let i = 0; i < len; i++) {
            let style = styles.circle;
            if (this.state.currentPage === i) {
                style = [styles.circle, styles.circleSelected];
            }
            circles.push((<View style={style} key={i}/>));
        }

        return (
            <View style={styles.circleContainer}>
                {circles}
            </View>
        );
    }

    _onPageSelected(e) {
        const len = this.props.data.length;
        if (len == 1) {
            return;
        }

        let position = e.nativeEvent.position;
        let currentPage;
        if (position == 0) {
            // 当到第 0 页时跳转到倒数第二页
            currentPage = len - 1;
            this.viewPager.setPageWithoutAnimation(len);
        } else if (position == len + 1) {
            // 当到最后一页时跳转到第一页
            currentPage = 0;
            this.viewPager.setPageWithoutAnimation(1);
        } else {
            currentPage = position - 1;
        }

        this.setState({
            currentPage: currentPage
        });
    }
}

const styles = StyleSheet.create({
    image: {
        width: g_screen.width,
        height: 150
    },
    circleContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    circleSelected: {
        backgroundColor: '#0f0'
    }
});
