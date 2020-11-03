import {getFavoriteImages, getImagesData, getViralPosts} from './images.actions';

const initialState = {
  images: [],
  viralPosts: [],
  favoriteImages: []
};

export const ImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getImagesData.success.toString():
      return {
        ...state,
        images: action.payload.data,
      };
    case getViralPosts.success.toString():
      return {
        ...state,
        viralPosts: action.payload.data,
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