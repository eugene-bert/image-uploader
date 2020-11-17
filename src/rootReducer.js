import {combineReducers} from 'redux';
import {ImagesReducer} from '@modules/images/Images.reducer';
import {connectRouter} from 'connected-react-router';
import {CommentsReducer} from '@modules/comments/comments.reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    images: ImagesReducer,
    comments: CommentsReducer,
  });

export default createRootReducer;
