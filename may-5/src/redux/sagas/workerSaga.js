import { call, put } from "redux-saga/effects";

//api calls
import {
  createPostFromApi,
  deletePostFromApi,
  getPostsByIdFromApi,
  getPostsFromApi,
  updatePostFromApi,
} from "../../api/api";

//redux actions
import {
  createPostFailure,
  createPostSuccess,
  deletePostFailure,
  deletePostSuccess,
  getPostsByIdFailure,
  getPostsByIdSuccess,
  getPostsFailure,
  getPostsSuccess,
  updatePostFailure,
  updatePostSuccess,
} from "../actions/postsActions";

function* getPostsSaga() {
  try {
    const data = yield call(getPostsFromApi);
    yield put(getPostsSuccess(data));
  } catch (err) {
    yield put(getPostsFailure(err));
  }
}

function* getPostsByIdSaga(action) {
  try {
    const data = yield call(getPostsByIdFromApi, action.payload.id);
    yield put(getPostsByIdSuccess(data));
  } catch (err) {
    yield put(getPostsByIdFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const data = yield call(createPostFromApi, action.payload.post);
    yield put(createPostSuccess(data));
  } catch (err) {
    yield put(createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const data = yield call(updatePostFromApi, action.payload.post);
    yield put(updatePostSuccess(data));
  } catch (err) {
    yield put(updatePostFailure(err));
  }
}

function* deletePostSaga(action) {
  console.log(action);
  try {
    const res = yield call(deletePostFromApi, action.payload.id);
    console.log(res);
    yield put(deletePostSuccess(res.id));
  } catch (err) {
    yield put(deletePostFailure(err));
  }
}

export {
  getPostsSaga,
  getPostsByIdSaga,
  createPostSaga,
  updatePostSaga,
  deletePostSaga,
};
