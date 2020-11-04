import {all} from 'redux-saga/effects';
import {watchImagesData} from '@modules/images/Images.sagas';
import {watchCommentsData} from '@modules/comments/comments.sagas';

function* rootSaga() {
  yield all([watchImagesData(), watchCommentsData()]);
}

export default rootSaga;