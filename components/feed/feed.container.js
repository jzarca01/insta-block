import FeedComponent from './feed.component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getInstance, getItems } from './feed.actions';

function mapStateToProps(state) {
  return state.feed;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getItems, getInstance }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedComponent)