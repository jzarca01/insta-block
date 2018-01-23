import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Animated
} from 'react-native';
import LottieView from 'lottie-react-native';
import PTRView from 'react-native-pull-to-refresh';

import loadingJSON from '../../common/animation.json';
import { connect } from 'react-redux';

import CardComponent from '../card/card.component';
import LoadingComponent from '../loading/loading.component';

export default class FeedComponent extends Component {

  constructor(props) {
    super(props);

    this._refresh = this._refresh.bind(this);
  }

  _refresh() {
    this.props.getInstance(false);
  }

  componentDidMount() {
    this.props.getInstance();
  }

  render () {
    return (
      <View>
        <StatusBar
            backgroundColor="green"
            barStyle="light-content"
        />
        <PTRView onRefresh={this._refresh} >
        <ScrollView>
            {this.props.isLoading && 
              <View style={styles.container}>
                <LoadingComponent style={styles.loading} />  
                <Text>
                  Loading...
                </Text>
              </View>    
            }
            {!this.props.isLoading && this.props.feedInfo && this.props.feedInfo.length > 0 &&
              this.props.feedInfo.slice(0).reverse().map((block, index) => 
                <CardComponent photo={block.photo} key={index} />
              )
            }
        </ScrollView>
      </PTRView>
    </View>
    );
  }
}

var styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    loading: {
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow:1
    }
}