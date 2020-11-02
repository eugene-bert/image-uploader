import {takeEvery, call,  put} from 'redux-saga/effects';
import * as A from './images.actions'
import api from '../../api/api';
import {message} from 'antd';

function* getImagesData() {
  try {
    const imagesData = yield call(() => api.getImages())
    yield put(A.getImagesData.success(imagesData))
  } catch (e) {
    yield put(A.getImagesData.failure(e))
    console.log(e);
  }
}


function* getViralImages() {
  try {
    const imagesData = yield call(() => api.getViralImages())
    yield put(A.getViralImages.success(imagesData))
  } catch (e) {
    yield put(A.getViralImages.failure(e))
    console.log(e);
  }
}

function* favoriteImage({payload}) {
  try {
    yield call(() => api.favoriteImage(payload))
    yield put(A.favoriteImage.success())
    yield put(A.getFavoriteImages.request())
    yield message.success(`Added to favorites`);
  } catch (e) {
    yield put(A.favoriteImage.failure(e))
    yield message.error(`Adding to favorites failed`);
    console.log(e);
  }
}

function* getFavoriteImages() {
  try {
    const imagesData = yield call(() => api.getFavoriteImages())
    yield put(A.getFavoriteImages.success(imagesData))
  } catch (e) {
    yield put(A.getFavoriteImages.failure(e))
    console.log(e);
  }
}

function* uploadImageData({payload}) {
  try {
    yield call(() => api.uploadImage(payload))
    yield put(A.uploadImage.success())
    yield put(A.getImagesData.request())
    yield message.success(`File uploaded successfully`);
  } catch (e) {
    yield put(A.uploadImage.failure(e))
    yield message.error(`File upload failed`);
    console.log(e);
  }
}

export function* watchLoadData() {
  yield takeEvery(A.getImagesData.request.toString(), getImagesData)
  yield takeEvery(A.getViralImages.request.toString(), getViralImages)
  yield takeEvery(A.getFavoriteImages.request.toString(), getFavoriteImages)
  yield takeEvery(A.favoriteImage.request.toString(), favoriteImage)
  yield takeEvery(A.uploadImage.request.toString(), uploadImageData)
}