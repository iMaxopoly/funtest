import {all, takeLatest} from "redux-saga/effects"

function *watcher(){
  yield all([
    takeLatest()
  ]);
}

export default watcher;
