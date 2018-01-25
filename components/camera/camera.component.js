import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper'
import Camera from "react-native-camera";
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import EditorContainer from '../editor/editor.container';

export default class CameraComponent extends Component {

  static propTypes = {
    hasCaptured: PropTypes.bool.isRequired,
    photoInfo: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      photoPath: null
    };

    this.takePicture = this.takePicture.bind(this);
  }

  componentDidMount() {
    this.props.loadCamera();
  }

  takePicture() {
    this.camera
      .capture({ metadata: {} })
      .then(response => {
        this.props.capturePhoto(response);
        this.swiper.scrollBy(1); 
      })
      .catch(err => this.props.isErrorCamera());
  }

  render () {
    return (
      <Swiper style={styles.wrapper} loop={false} showsPagination={false} 
        ref={(swiper) => {
            this.swiper = swiper
          }
        }
        scrollEnabled={this.props.hasCaptured}
      >
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
        <View style={styles.container}>
          {this.props.photoInfo && 
            <EditorContainer swiper={this.swiper} photo={this.props.photoInfo.path}/> 
          }
        </View>
      </Swiper>
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
