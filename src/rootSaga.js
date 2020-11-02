import {all} from 'redux-saga/effects';
import {watchLoadData} from './modules/images/Images.sagas';

function* rootSaga() {
  yield all([watchLoadData()]);
}

export default rootSaga;