// @flow

import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  visitorsRequest: null,
  visitorsSuccess: ['visitors'],
  visitorsFailure: ['error']
})

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  visitors: null,
  error: null,
  fetching: false
})

export const VisitorTypes = Types
export default Creators

/* ------------- Reducers ------------- */

// requesting visitors
export const request = (state: Object) => state.merge({ fetching: true })

// visitors request succcessful
export const success = (state: Object, { visitors }: Object) =>
  state.merge({ fetching: false, error: null, visitors })

// visitors request failed
export const failure = (state: Object, { error }: Object) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.VISITORS_REQUEST]: request,
  [Types.VISITORS_SUCCESS]: success,
  [Types.VISITORS_FAILURE]: failure
})
