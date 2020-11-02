import { combineReducers } from "redux";
import {ImagesReducer} from './components/images/Images.reducer';

const reducers = combineReducers({
  images: ImagesReducer
});

export default reducers;
