/**
 * Created by Administrator on 2018/2/6.
 */
import React, {Component} from 'react';
import {Button, Image, Text, TextInput, ToastAndroid, View, Keyboard} from "react-native";

class DiyInput extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    _keyboardDidShow(){
        ToastAndroid.show("keyboard show", ToastAndroid.SHORT);
    }

    _keyboardDidHide(){
        ToastAndroid.show("keyboard hide", ToastAndroid.SHORT);
    }

    render() {
        return <TextInput
            {...this.props}
            editable={true}
            maxLength={50}
        />
    }
}

export  class Input extends Component {

    static navigationOptions = {
        title: "input page"
    };


    constructor(props) {
        super(props);
        this.state = {value: "input your text"};
    }

    render() {
        return (
            <View>
                <TextInput placeholder="input your text" onChangeText={(text) => this.onTextChange(text)}/>

                <DiyInput
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={(input) => {
                        this.setState({value: input})
                    }}
                    //value={this.state.value}
                    placeholder ="input xxxxx"
                    textAlignVertical='top'
                    underlineColorAndroid="red"
                    autoFocus={true}
                    keyboardType="phone-pad"
                    returnKeyType ="next"

                    onFocus={this._onfocus}
                    onBlur={this._onblur}
                    onEndEditing={this._onEndEditing}
                    onSubmitEditing={this._onSubmitEditing}
                    onSelectionChange={this._onSelectionTextChangeg}
                />

                <View>

                    <Image source={require('../img/im.png')}/>

                    <TextInput placeholder="input your text"
                               secureTextEntry={true}
                               selectTextOnFocus={true}
                               selectionColor="red"
                               inlineImageLeft='pic'
                    />

                </View>



            </View>
        );
    }

    onTextChange(text) {
        console.debug("input text:" + text);
        ToastAndroid.show('you input text:' + text, ToastAndroid.SHORT, ToastAndroid.TOP);
        return text;
    }


    _onfocus(){
        console.debug("input _onfocus");
    }

    _onEndEditing(){
        console.debug("input _onEndEditing");
    }

    _onblur(){
        console.debug("input _onblur");
    }

    _onSubmitEditing(){
        console.debug("input _onSubmitEditing");
    }

    _onSelectionTextChangeg(){
        console.debug("input _onSelectionTextChangeg");
    }
}