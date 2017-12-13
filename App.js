/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Camera from "react-native-camera";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barcode: ""
        };
    }
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.text}>{this.state.barcode}</Text>
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                onBarCodeRead={this.onBarCodeRead.bind(this)}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    );
  }

  onBarCodeRead(e) {
    this.setState({barcode: e.data});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    preview: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
