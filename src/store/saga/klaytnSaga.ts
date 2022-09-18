import { call, takeEvery } from 'redux-saga/effects'
import { COOKIE_KEYS, removeCookie, setCookie } from 'src/modules/cookieHelper'
import { SELECTED_ADDRESS_KLAYTN } from '../reducers/klaytnReducer'

function* selectedAddressSaga(action) {
    if (action.selectedAddress) {
      yield call(() => setCookie(COOKIE_KEYS.selectedKlaytnAddress, action.selectedAddress))
    } else {
      yield call(() => removeCookie(COOKIE_KEYS.selectedKlaytnAddress))
    }
}

export default function* watchAuth() {
  yield takeEvery(SELECTED_ADDRESS_KLAYTN, selectedAddressSaga)
}
