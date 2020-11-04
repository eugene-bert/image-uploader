import {takeEvery, call, put} from 'redux-saga/effects';
import * as A from './comments.actions';
import api from '../../api/api';
import {message} from 'antd';

function* getComments({payload}) {
  try {
    const commentData = yield call(() => api.getComments(payload));
    yield put(A.getComments.success(commentData));
  } catch (e) {
    yield put(A.getComments.failure(e));
    console.log(e);
  }
}

function* addComment({payload}) {
  try {
    yield call(() => api.addComment(payload.data));
    yield put(A.addComment.success(payload.data));
    yield put(A.getComments.request(payload.id));
    yield message.success(`Added comment successfully`);
  } catch (e) {
    yield put(A.addComment.failure(e));
    yield message.error(`Comment adding failed`);
    console.log(e);
  }
}

export function* watchCommentsData() {
  yield takeEvery(A.getComments.request.toString(), getComments);
  yield takeEvery(A.addComment.request.toString(), addComment);
}
