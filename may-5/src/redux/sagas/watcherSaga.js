import { takeLatest } from "redux-saga/effects";
import {
  getPostsSaga,
  getPostsByIdSaga,
  createPostSaga,
  updatePostSaga,
  deletePostSaga,
} from "./workerSaga";

function* watcherSaga() {
  console.log("watcher saga");
  yield takeLatest("GET_POSTS_REQUEST", getPostsSaga);
  yield takeLatest("GET_POST_BY_ID_REQUEST", getPostsByIdSaga);
  yield takeLatest("CREATE_POST_REQUEST", createPostSaga);
  yield takeLatest("UPDATE_POST_REQUEST", updatePostSaga);
  yield takeLatest("DELETE_POST_REQUEST", deletePostSaga);
}

export default watcherSaga;
