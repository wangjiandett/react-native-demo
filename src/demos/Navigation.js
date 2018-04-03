/**
 * Created by Administrator on 2018/1/8.
 */
import React, {Component} from 'react';
import {
    Button, Text, View, StyleSheet, TouchableHighlight, Share, TimePickerAndroid
} from 'react-native';

export class Navigation extends Component {
    static navigationOptions = {
        title: 'Three Sceen',
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {result: ""};
    }


    render() {
        return (
            <View>
                <Text>Three page</Text>
                <Button onPress={() => this.props.navigation.navigate('MM')}
                        title="go to MM"/>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._shareMessage}>
                    <View style={styles.button}>
                        <Text>Click to share message</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._shareText}>
                    <View style={styles.button}>
                        <Text>Click to share message, URL and title</Text>
                    </View>
                </TouchableHighlight>
                <Text>{this.state.result}</Text>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={this._openTimePicker}>
                    <View style={styles.button}>
                        <Text>Click to open time picker</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    _shareMessage() {
        Share.share({
            message: 'React Native | A framework for building native apps using React'
        }).then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _shareText() {
        Share.share({
            message: 'A framework for building native apps using React',
            url: 'http://facebook.github.io/react-native/',
            title: 'React Native'
        }, {
            dialogTitle: 'Share React ative website',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'green'
        }).then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _showResult(result) {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
    }

    async _openTimePicker() {
        try {
            const {action, hour, minute} = await
                TimePickerAndroid.open({
                    hour: 14,
                    minute: 0,
                    is24Hour: false, // 会显示为'2 PM'
                });

            if (action !== TimePickerAndroid.dismissedAction) {
                // 这里开始可以处理用户选好的时分两个参数：hour (0-23), minute (0-59)
                console.debug("action=" + action + " ,hour=" + hour + " ,minute=" + minute)
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }
}


const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});