import axios from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { getUsersFailure, getUsersSuccess } from "./userSlice";

function* getUserAsync() {
  try {
    const response = yield call(() =>
      axios.get("http://jsonplaceholder.typicode.com/users")
    );
    if (response && response.status === 200) {
      yield delay(500);
      yield put(getUsersSuccess(response.data));
    }
  } catch (err) {
    yield put(getUsersFailure(err.response.data));
  }
}

function* onfetchUserRequet() {
  yield takeEvery("user/getUsersRequest", getUserAsync);
}

export default onfetchUserRequet;
