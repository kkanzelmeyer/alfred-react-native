import { takeLatest } from 'redux-saga'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { VisitorTypes } from '../Redux/VisitorRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { openScreen } from './OpenScreenSagas'
import { fetchVisitors } from './VisitorsSagas'
API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),
    takeLatest(VisitorTypes.VISITORS_REQUEST, fetchVisitors)
  ]
}
