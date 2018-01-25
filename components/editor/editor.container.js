import EditorComponent from './editor.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getInstance, postImage, addItemToTheBlockChain, cancelPhoto } from './editor.actions';

function mapStateToProps(state) {
  return state.camera;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getInstance, postImage, addItemToTheBlockChain, cancelPhoto }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);