import { call, put } from "redux-saga/effects";
import { loginAPI } from "../../services/commonApis";
import { userLoginSuccess, userLoginFailed } from "../slices/UserSlice";

function* loginSaga({ payload }: any): any  {
  try {
    const response = yield call(()=>loginAPI(payload));
    console.log("REsponse", response)
    if (response.status === 200) {
        console.log(response.data)
        yield put(userLoginSuccess(response.data))
    } else {
      yield put(userLoginFailed({}))
    //   console.log(response?.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export default loginSaga;