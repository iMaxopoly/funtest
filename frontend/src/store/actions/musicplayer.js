import {CHANGE_TO_NEXT_SONG, CHANGE_TO_PREV_SONG, PAUSE_SONG, STOP_SONG} from './types';

export const changeNext = (type, payload) => {
  return {
    type: CHANGE_TO_NEXT_SONG,
    payload
  };
};

export const changePrev = (type, payload) => {
  return {
    type: CHANGE_TO_PREV_SONG,
    payload
  };
};

export const pause = (type, payload) => {
  return {
    type: PAUSE_SONG,
    payload
  };
};

export const stop = (type, payload) => {
  return {
    type: STOP_SONG,
    payload
  };
};
