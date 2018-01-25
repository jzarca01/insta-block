import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
} from 'react-native';
import RNImageTools from "react-native-image-tools";
import { connect } from 'react-redux';
import config from '../../config/config.json';

export default class EditorComponent extends Component {

    static propTypes = {
        instance: PropTypes.object.isRequired,
        hasUploaded: PropTypes.bool.isRequired,
        photoInfo: PropTypes.object.isRequired,
        isAddedToBlockChain: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        console.log("editor props", this.props);
        this._openEditor = this._openEditor.bind(this);
    }

    async componentDidMount() {
        await this.props.getInstance();
        RNImageTools.authorize(
            config.adobe.clientId, 
            config.adobe.clientSecret, 
            config.adobe.clientRedirectUrl
        );
    }

    shouldComponentUpdate() {
        return true;
    }

    async _openEditor() {
        try {
            const uri = await RNImageTools.openEditor({
                imageUri: this.props.photoInfo.path,
                outputFormat: 'JPEG',
                quality: 80,
                preserveMetadata: true,
                saveTo: 'file'
            });
    
            console.log("edited uri", uri);
    
            if (!uri) {
                console.log("editing cancelled");
                this.setState({
                    selectedImage: null
                });
                await this.props.cancelPhoto();
                this.props.swiper.scrollBy(-1);
            } 
            else {
                await this.props.postImage(this.props.instance, uri);
                this.props.swiper.scrollBy(-1);
            }
        } catch (e) {
            console.warn("error", e);
        }
    }

    render() {
        return (
        <View>
            {this.props.hasCaptured && this.props.photoInfo && this.props.photoInfo.hasOwnProperty('path') ? this._openEditor() : <Text>Loading editor...</Text>}
        </View>
        );
    }
}
