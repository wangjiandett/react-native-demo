import React, {Component} from "react";
import {StyleSheet, ToastAndroid, View, ViewPagerAndroid, Dimensions, Image, Text} from "react-native";
import PropTypes from 'prop-types';

const screenWidth = Dimensions.get('window').width;

export class ViewPagerDemo extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        const imageUrls = [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2439027019,2070793186&fm=27&gp=0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522228363587&di=a94931f92ad3b744850ed3914991e92a&imgtype=0&src=http%3A%2F%2Fwww.52ij.com%2Fuploads%2Fallimg%2F160218%2F22214a311-0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522228363586&di=cdb665d0eebbdb1083352d0d4517feb7&imgtype=0&src=http%3A%2F%2Fp0.meituan.net%2Fdeal%2F187771a2611e506e1b3ffbd461b80b6359181.jpg'];

        return (<View>
            <ViewPager imageUrls={imageUrls}/>
        </View>);
    }
}

/**
 * view pager 实现无限循环
 */
class ViewPager extends Component {
    constructor(props) {
        super(props);
        this._renderPagers = this._renderPagers.bind(this);
        this._renderCircles = this._renderCircles.bind(this);
        this._onPageSelected = this._onPageSelected.bind(this);
        this.state = {
            currentPage: 0
        };
    }

    render() {
        const height = this.props.height || 170;
        return (
            <View>
                <ViewPagerAndroid
                    initialPage={1}
                    style={{height: height}}
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
        const imageUrls = this.props.imageUrls;
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

    _renderPagerItem(url, key) {
        console.debug("url:"+url)
        return (
            <View key={key} style={{flex: 1, flexDirection: 'row'}}>
                <Image source={{uri: url}} style={styles.image}/>
            </View>
        );
    }

    _renderCircles() {
        const imageUrls = this.props.imageUrls;
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
        const len = this.props.imageUrls.length;
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

ViewPager.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    height: PropTypes.number
};

const styles = StyleSheet.create({
    image: {
        width:screenWidth,
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
