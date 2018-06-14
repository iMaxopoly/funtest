import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.clickNext = this.clickNext.bind(this);
  }

  componentDidMount() {
    console.log(this.props.songs);
  }


  clickPrev() {

  }

  clickStop() {

  }

  clickPause() {

  }

  clickNext() {

  }

  render() {
    return (
      <div>
        Controls
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.musicplayerReducer.songs
  };
};

export default connect(mapStateToProps, actions)(Controls);
