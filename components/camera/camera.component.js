import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';
import Swiper from 'react-native-swiper'
import Camera from "react-native-camera";
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

export default class CameraComponent extends Component {

  static propTypes = {
    instance: PropTypes.object.isRequired,
    hasCaptured: PropTypes.bool.isRequired,
    hasUploaded: PropTypes.bool.isRequired,
    photoInfo: PropTypes.object.isRequired,
    isAddedToBlockChain: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.takePicture = this.takePicture.bind(this);
  }

  componentDidMount() {
    this.props.getInstance();
  }

  takePicture() {
    this.camera
      .capture({ metadata: {} })
      .then(response => this.props.postImage(this.props.instance, response.path))
  }

  render () {
    return (
    <View style={styles.container}>
        <Camera
            ref={(cam) => {
                this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}
            >
            <Icon.Button 
              name="camera"
              iconStyle={{marginLeft:10}}
              backgroundColor={this.props.hasCaptured ? "#111" : "#3b5998"}
              onPress={this.takePicture} 
              disabled={this.props.hasCaptured}>
            </Icon.Button>
        </Camera>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        marginBottom: 50
    }
});
