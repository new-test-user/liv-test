import { put, call } from 'redux-saga/effects'
import actions from 'redux/actions'
import Alert from 'react-s-alert'

import { sendChangeDetailsRequest } from 'api'

export function* changeDetails(action) {
  try {
    const { payload } = action

    const data = yield call(sendChangeDetailsRequest, payload)

    yield put({
      type: actions.CHANGE_DETAILS_SUCCESS,
      payload: data,
    })

    Alert.success('Details changed successfully!', {
      position: 'top-right',
      effect: 'slide',
      timeout: 3000,
    })
  } catch (error) {
    yield put({
      type: actions.CHANGE_DETAILS_FAILURE,
    })

    Alert.error(error, {
      position: 'top-right',
      effect: 'slide',
      timeout: 3000,
    })
  }
}
