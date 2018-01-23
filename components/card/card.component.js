import React, {Component} from 'react';
import {
    View,
    Image
} from 'react-native';

import {
    RkButton,
    RkCard,
    RkText,
    RkTheme
} from 'react-native-ui-kitten';

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render () {
    return (
    <RkCard rkType='story'>
        <Image rkCardImg source={{uri: this.props.photo}}/>
        <View rkCardHeader>
            <RkText rkType='header'>Once upon a time</RkText>
        </View>
        <View rkCardContent>
            <RkText style={{textAlign:'center'}}>
                One morning, when Gregor Samsa woke from happy dreams,
                he found himself transformed in ...
            </RkText>
        </View>
        <View rkCardFooter>
            <RkButton rkType='small outline'>Learn More</RkButton>
            <RkButton rkType='small'>Read later</RkButton>
        </View>
    </RkCard>
    );
  }
}

RkTheme.setType('RkCard', 'story', {
    img: {
        height: 500,
        opacity: 0.9
    },
    header: {
        alignSelf: 'center'
    },
    content:{
        alignSelf:'center'
    }
  });