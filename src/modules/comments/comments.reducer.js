import {getComments} from './comments.actions';

const initialState = {
  comments: []
};

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getComments.success.toString():
      return {
        ...state,
        comments: action.payload.data,
      };
    default:
      return state;
  }
};