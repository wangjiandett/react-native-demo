/**
 * Created by Administrator on 2018/3/7.
 */

import React, {Component} from 'react'
import {
    Button, Modal, Picker, ProgressBarAndroid, Text, TouchableHighlight, TouchableOpacity,
    View
} from "react-native";

export class ModalDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            language: "java"
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Text>===Modal===</Text>
                <Modal
                    animationType={"fade"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }}>

                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={{height: 30}}>Hide Modal</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text style={{height: 30}}>Show Modal</Text>
                </TouchableHighlight>

                <Text>===Picker===</Text>

                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}
                    // 默认dialog模式
                    // dropdown
                    mode="dialog">

                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>

                <Text>===ProgressBarAndroid===</Text>

                <ProgressBarAndroid
                    color="blue"
                    progress={0.5}
                    indeterminate={false}
                    styleAttr="Horizontal"/>

                <ProgressBarAndroid
                    color="red"
                    styleAttr="Horizontal"/>

                <ProgressBarAndroid
                    color="yellow"
                    styleAttr="Large"/>

                <ProgressBarAndroid
                    color="black"
                    styleAttr="Small"/>

                <ProgressBarAndroid
                    color="pink"
                    styleAttr="Inverse"/>
            </View>
        );
    }


}
