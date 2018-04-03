/**
 * Created by Administrator on 2018/3/10.
 */

import React, {Component} from 'react'
import {StyleSheet, ToolbarAndroid, View} from "react-native";


export class Toolbar extends Component {

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            console.debug("onActionSelected")
        }
    }

    _oniconclick(){
        console.debug("_oniconclick")
    }

    render() {
        return (
            <View>

                <ToolbarAndroid
                    actions={toolbarActions}
                    navIcon={require('../img/im.png')}
                    logo={require('../img/im.png')}
                    style={styles.toolbar}
                    subtitle="副标题"
                    title="主标题"
                   // overflowIcon={require('./img/im.png')}
                    onIconClicked={this._oniconclick}
                />

                <View style={styles.divider}/>

                <ToolbarAndroid
                    style={styles.toolbar}
                    logo={require('../img/im.png')}
                    title="AwesomeApp"
                    actions={[{title: 'Settings', icon: require('../img/im.png'), show: 'always'}]}
                    onActionSelected={this.onActionSelected}/>
            </View>
        );
    }
}

var toolbarActions = [
    {title: 'Create', icon: require('../img/im.png'), show: 'always'},
    {title: 'Filter'},
    {title: 'Settings', icon: require('../img/im.png'), show: 'always'},
];
const styles = StyleSheet.create({

    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
        marginTop:10,
    },
});

