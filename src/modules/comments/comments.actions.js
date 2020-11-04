import { createRequest } from '@/sagas/utils'

export const getComments = createRequest('GET_COMMENTS')
export const addComment = createRequest('ADD_COMMENT')