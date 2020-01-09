import { takeEvery, all } from 'redux-saga/effects'
import actions from 'redux/actions'
import * as details from './details'

export default function* root() {
  yield all([takeEvery(actions.CHANGE_DETAILS_REQUEST, details.changeDetails)])
}
