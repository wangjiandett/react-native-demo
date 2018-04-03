/**
 * Created by Administrator on 2018/3/8.
 */

import React, {Component} from 'react'
import {ToastAndroid, Dimensions, StyleSheet, SectionList, View, Text} from "react-native";

export class SectionListComponet extends Component {

    constructor(props) {
        super(props);
        this.state = {isRefreshing: false};
    }


    _renderItemView = (info) => {
        let txt = info.item.title;
        return <Text style={{height: 40, fontSize: 15, color: 'gray', textAlign: 'center', textAlignVertical:'center'}}>{txt}</Text>;
    }

    _renderSectionHeader = (info) => {
        let txt = info.section.key;
        return <Text style={{backgroundColor: 'green', fontSize: 20, height: 30, textAlign: 'center'}}>{txt}</Text>
    }

    _itemSeparatorComponent = ()=>{
        return <Text style={{height:1, backgroundColor:'gray'}}/>
    };

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={{
                height: 60,
                textAlignVertical: 'center',
                backgroundColor: "#ffffff",
                color: '#5C5C5C',
                fontSize: 15
            }}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{
                height: 50,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: '#9CEBBC',
                color: 'white',
                fontSize: 30
            }}>{txt}</Text>
    }

    _onrefresh(){
        this.setState({isRefreshing: true})
        setTimeout(()=>{
            ToastAndroid.show("refresh success", ToastAndroid.SHORT)
            this.setState({isRefreshing: false})
        }, 2000)
    }

    render() {
        var sections = [
            {key: "A", data: [{title: "阿童木"}, {title: "阿玛尼"}, {title: "爱多多"}]},
            {key: "B", data: [{title: "表哥"}, {title: "贝贝"}, {title: "表弟"}, {title: "表姐"}, {title: "表叔"}]},
            {key: "C", data: [{title: "成吉思汗"}, {title: "超市快递"}]},
            {
                key: "W",
                data: [{title: "王磊"}, {title: "王者荣耀"}, {title: "往事不能回味"}, {title: "王小磊"}, {title: "王中磊"}, {title: "王大磊"}]
            },
        ];

        const section = [
            {key: "1", data: [{title: '小白1'},{title: '小白1'},{title: '小白1'},{title: '小白1'},{title: '小白1'}]},
            {key: "2", data: [{title: '小白2'},{title: '小白2'},{title: '小白2'},{title: '小白2'},{title: '小白2'}]},
            {key: "3", data: [{title: '小白3'},{title: '小白2'},{title: '小白2'},{title: '小白2'},{title: '小白2'}]},
            {key: "4", data: [{title: '小白4'},{title: '小白2'},{title: '小白2'},{title: '小白2'},{title: '小白2'}]}
        ];


        return (
            <View style={{flex: 1}}>
                {/*<SectionList*/}
                {/*renderSectionHeader={this._sectionComp}*/}
                {/*renderItem={this._renderItem}*/}
                {/*sections={sections}*/}
                {/*keyExtractor={(item, index) => ("index" + index + item)}*/}
                {/*stickySectionHeadersEnabled={true}*/}
                {/*ItemSeparatorComponent={() => <View><Text></Text></View>}*/}
                {/*ListHeaderComponent={() => <View*/}
                {/*style={{backgroundColor: '#25B960', alignItems: 'center', height: 30}}><Text*/}
                {/*style={{fontSize: 18, color: '#ffffff'}}>通讯录</Text></View>}*/}
                {/*ListFooterComponent={() => <View*/}
                {/*style={{backgroundColor: '#25B960', alignItems: 'center', height: 30}}><Text*/}
                {/*style={{fontSize: 18, color: '#ffffff'}}>通讯录尾部</Text></View>}*/}
                {/*/>*/}


                <SectionList
                    onRefresh={this._onrefresh.bind(this)}
                    refreshing={this.state.isRefreshing}
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItemView}
                    sections={section}
                    keyExtractor={(item, index) => ("index" + index)}
                    stickySectionHeadersEnabled={true}
                    ItemSeparatorComponent = {this._itemSeparatorComponent}
                />

            </View>
        );
    }

}
