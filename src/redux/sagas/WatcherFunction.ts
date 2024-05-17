import {all, takeLatest} from 'redux-saga/effects';
import { userLoginRequested } from '../slices/UserSlice';
import {TakeableChannel} from 'redux-saga';
import loginSaga from './userSaga';

function* loginUserApi(){
  yield takeLatest(
    userLoginRequested.type as unknown as TakeableChannel<unknown>,
    loginSaga,
  );
}

export default function* RootSaga() {
  yield all([loginUserApi()]);
}
