import CameraComponent from './camera.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getInstance, postImage, addItemToTheBlockChain } from './camera.actions';

function mapStateToProps(state) {
  return state.camera;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getInstance, postImage, addItemToTheBlockChain}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraComponent)