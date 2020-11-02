import { createAction } from 'redux-actions'

export function createRequest(name) {
  return ({
    request: createAction(`${name}_REQUEST`),
    success: createAction(`${name}_SUCCESS`),
    failure: createAction(`${name}_FAILURE`),
  })
}