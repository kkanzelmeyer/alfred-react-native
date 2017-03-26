import { put, call } from 'redux-saga/effects'
import VisitorActions from '../Redux/VisitorRedux'
import request from 'utils/request'
import { visitorsRef } from '../Config/Firebase'

export function* fetchVisitors () {
  const requestURL = 'https://erm-dev-api.herokuapp.com/stories'
  const requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  try {
    yield put(VisitorActions.visitorsRequest())
    const user = yield call(request, requestURL, requestOptions)
    const { data } = user
    yield put(VisitorActions.visitorsSuccess(data))
  } catch (e) {
    yield put(VisitorActions.visitorsFailure(e))
  }
  return
}
