import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper'

import FeedContainer from './feed/feed.container';
import CameraContainer from './camera/camera.container';

export default class mobile extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render () {
    return (
    <Swiper style={styles.wrapper} loop={false} showsPagination={false}>
      <View style={styles.slide}>
        <FeedContainer />
      </View>
      <View style={styles.slide}>
        <CameraContainer />
      </View>
    </Swiper>
    );
  }
}

var styles = {
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}