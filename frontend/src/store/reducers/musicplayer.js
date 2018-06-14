import {CHANGE_TO_NEXT_SONG} from '../actions/types';
import {changeNext} from '../actions';

const initialState = {
  songs: ['Rick and Roll', 'Charlie and the Chipmunks'],
  currentSong: '',
  nextSong: '',
  prevSong: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_NEXT_SONG:
      return changeNext(state, action);
    default:
      return state;
  }
}
