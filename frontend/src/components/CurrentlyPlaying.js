import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class CurrentlyPlaying extends Component {
  render() {
    return (
      <div>
        CurrentlyPlaying
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(CurrentlyPlaying);
