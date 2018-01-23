import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
        <View style={{marginTop: 100, flex: 1, alignItems:'flex-end'}}>
            <Animation
              ref={animation => { 
                  this.animation = animation; 
              }}
              style={styles.animation}
              source={require('../../common/animation.json')}
            />
        </View>    
    );
  }
}

const styles = StyleSheet.create({
    animation: {
        width: 300,
        height: 200
    }
})