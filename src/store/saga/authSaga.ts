import { call, put, takeEvery } from 'redux-saga/effects'
import { setJwt } from 'src/modules/cookieHelper'
import { LOGIN, loginAction } from '../reducers/authReducer'

function* loginSaga(action) {
    console.log(action)
    yield call(setJwt, action.jwt)
    // yield put(loginAction(action.payload)) call another fx
}

export default function* watchAuth() {
  yield takeEvery(LOGIN, loginSaga)
}
