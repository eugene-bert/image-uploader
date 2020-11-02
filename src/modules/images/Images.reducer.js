import {getFavoriteImages, getImagesData, getViralImages} from './images.actions';

const initialState = {
  images: [],
  viralImages: [],
  favoriteImages: []
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
    case getFavoriteImages.success.toString():
      return {
        ...state,
        favoriteImages: action.payload.data,
      };
    default:
      return state;
  }
};