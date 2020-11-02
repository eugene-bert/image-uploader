import { combineReducers } from "redux";
import {ImagesReducer} from './modules/images/Images.reducer';
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  images: ImagesReducer
})

export default createRootReducer;
