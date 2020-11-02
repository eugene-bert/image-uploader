import {getImagesData, getViralImages} from './images.actions';

const initialState = {
  images: [],
  viralImages: []
};

export const ImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getImagesData.success.toString():
      return {
        ...state,
        images: action.payload.data,
      };
    case getViralImages.success.toString():
      return {
        ...state,
        viralImages: action.payload.data,
      };
    default:
      return state;
  }
};