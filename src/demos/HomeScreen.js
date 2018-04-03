import React, {Component} from 'react';

import {
    Text,
    View,
    Button,
    StyleSheet, ListView, TouchableHighlight, TouchableOpacity,
} from 'react-native';

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        // ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
        this.state = {dataSource: ds.cloneWithRows(this._getRows())};
    }

    _getRows() {
        const dataBlob = [];
        dataBlob.push("go to flex page");
        dataBlob.push("go to navigation page");
        dataBlob.push("go to input page");
        dataBlob.push("go to ScrollView page");
        dataBlob.push("go to FetchDemo page");
        dataBlob.push("go to TouchAble page");
        dataBlob.push("go to TimeInterval page");
        dataBlob.push("go to ImagePickers page");
        dataBlob.push("go to FlatListDemo page");
        dataBlob.push("go to ModalDemo page");
        dataBlob.push("go to SectionListComponet page");
        dataBlob.push("go to SlideDemo page");
        dataBlob.push("go to Toolbar page");
        dataBlob.push("go to ViewDemo page");
        dataBlob.push("go to TextDemo page");
        dataBlob.push("go to ViewPagerDemo page");
        dataBlob.push("go to WebViewDemo page");
        dataBlob.push("go to LocationDemo page");
        dataBlob.push("go to NativeJsChangeMsg page");


        return dataBlob;
    }


    _pressRow(rowID) {
        console.debug("rowId:" + (rowID));

        switch (rowID) {
            case '0':
                this.props.navigation.navigate("Flex")
                break;
            case '1':
                this.props.navigation.navigate("Navigation")
                break;
            case '2':
                this.props.navigation.navigate("Input")
                break;
            case '3':
                this.props.navigation.navigate("ScrollViewDemo")
                break;
            case '4':
                this.props.navigation.navigate("FetchDemo")
                break;
            case '5':
                this.props.navigation.navigate("TouchAble")
                break;
            case '6':
                this.props.navigation.navigate("TimeInterval")
                break;
            case '7':
                this.props.navigation.navigate("ImagePickers")
                break;
            case '8':
                this.props.navigation.navigate("FlatListDemo")
                break;
            case '9':
                this.props.navigation.navigate("ModalDemo")
                break;
            case '10':
                this.props.navigation.navigate("SectionListComponet")
                break;
            case '11':
                this.props.navigation.navigate("SlideDemo")
                break;
            case '12':
                this.props.navigation.navigate("Toolbar")
                break;
            case '13':
                this.props.navigation.navigate("ViewDemo")
                break;
            case '14':
                this.props.navigation.navigate("TextDemo")
                break;
            case '15':
                this.props.navigation.navigate("ViewPagerDemo")
                break;
            case '16':
                this.props.navigation.navigate("WebViewDemo")
                break;
            case '17':
                this.props.navigation.navigate("LocationDemo")
                break;
            case '18':
                this.props.navigation.navigate("NativeJsChangeMsg")
                break;
        }
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this._pressRow(rowID)}>
                <Text style={MyStyle.text}>{rowData}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const {navigate} =
            this.props.navigation;
        return (

            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            <View style={MyStyle.parent}>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }
}


const MyStyle = StyleSheet.create({

    parent: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },

    item: {
        height: 50,
        flex: 1,
        padding: 10
    },

    text: {
        fontSize: 20,
        color: '#282828',
        padding: 15,
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 1,

    }
});

