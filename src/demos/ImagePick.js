/**
 * Created by Administrator on 2018/2/26.
 */

import React, {Component} from "react"
import {Button, View, StyleSheet, ToastAndroid, Text} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

export class ImagePickers extends Component {

    constructor(props) {
        super(props);
        this.state={
            text:""
        }
    }

    //Image中的属性

    // path: string;
    // size: number;
    // data: null | string;
    // width: number;
    // height: number;
    // mime: string;
    // exif: null | object;
    // cropRect: null | CropRect


    /**
     * 选择单个图片
     *
     * @private
     */
    _openPicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
           // cropping: true
        }).then(image => {
            console.log(image);
            this.setState({
                text:image.path
            })
        }).catch(e=>{
            console.log(e);
        });
    }

    /**
     * 选择多个图片
     *
     * @private
     */
    _openPickers() {
        ImagePicker.openPicker({
            multiple:true,
            maxFiles:9
        }).then(images => {
            console.log(images);

            let array=[];

            images.map((image)=>{
                array.push(image.path+"\n")
            })

            this.setState({
                text:array.toString()
            })
        }).catch(e=>{
            console.log(e);
        });
    }

    /**
     * 选择video
     *
     * @private
     */
    _openVideos() {
        ImagePicker.openPicker({
            mediaType:'video'
        }).then(image => {
            console.log(image);
            this.setState({
                text:image.path
            })
        }).catch(e=>{
            console.log(e);
        });
    }

    /**
     * 打开相机
     *
     * @private
     */
    _openCamera() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({
                text:image.path
            })
        }).catch(e=>{
            console.log(e);
        });
    }

    /**
     * 裁剪图片（此处图片地址需要预先给定）
     *
     * @private
     */
    _openCropper() {
        ImagePicker.openCropper({
            path: 'file:///storage/emulated/0/DCIM/Camera/IMG_20180315_095331.jpg',
            width: 300,
            height: 400
        }).then(image => {
            console.log(image);
            this.setState({
                text:image.path
            })
        }).catch(e=>{
            console.log(e);
        });
    }


    render() {
        return (
            <View>
                <View style={styles.container}><Button title="Picker single image" onPress={() => this._openPicker()}/></View>
                <View style={styles.container}><Button title="Picker images" onPress={() => this._openPickers()}/></View>
                <View style={styles.container}><Button title="Picker video" onPress={() => this._openVideos()}/></View>

                <View style={styles.container}><Button title="Picker camera" onPress={() => this._openCamera()}/></View>
                <View style={styles.container}><Button title="Picker cropper" onPress={() => this._openCropper()}/></View>

                <View style={styles.container}><Text>{this.state.text}</Text></View>

            </View>);
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    }
});


