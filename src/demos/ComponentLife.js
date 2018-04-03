/**
 * Created by Administrator on 2018/3/21.
 */

import React, {Component} from 'react'
import {View} from "react-native";

export default class ComponentLife extends Componet {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    componentWillMount() {

    }

    static render() {
        return (<View>

        </View>);
    }

    componentDidMount() {

    }

    // 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),
    // 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
    // 建议只有在
    // componentWillMount,
    // componentDidMount,
    // componentWillReceiveProps
    // 方法中可以修改state值
    componentWillUnmount() {

    }

    // 当props发生变化时执行，初始化render时不执行，在这个回调函数里面，
    // 你可以根据属性的变化，通过调用this.setState()来更新你的组件状态，
    // 旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，并不会触发额外的render调用
    componentWillReceiveProps(nextProps) {
        this.setState({
           // likesIncreasing: nextProps.likeCount > this.props.likeCount
        });
    }

    componentDidUpdate() {

    }

    // 当props和state发生变化时执行，并且在render方法之前执行，
    // 当然初始化render时不执行该方法，需要特别注意的是，在这个函数里面，
    // 你就不能使用this.setState来修改状态。
    // 这个函数调用之后，就会把nextProps和nextState分别设置到this.props和this.state中。
    // 紧接着这个函数，就会调用render()来更新界面了
    componentWillUpdate() {

    }

    // 默认情况下，shouldComponentUpdate方法返回true防止state快速变化时的问题，
    // 但是如果state不变，props只读，可以直接覆盖shouldComponentUpdate
    // 用于比较props和state的变化，决定UI是否更新，当组件比较多时，使用这个方法能有效提高应用性能

    shouldComponentUpdate(nextProps, nextState) {
        // 方法返回false时，不会执行render()方法，
        // componentWillUpdate和componentDidUpdate方法也不会被调用
        return nextProps.id !== this.props.id;
    }


}


