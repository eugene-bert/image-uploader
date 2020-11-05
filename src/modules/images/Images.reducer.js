import {getFavoriteImages, getImagesData, getViralPosts} from './images.actions';

const initialState = {
  images: [],
  viralPosts: [],
  favoriteImages: [],
  loading: false,
};

export const ImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getImagesData.success.toString():
      return {
        ...state,
        images: action.payload.data,
      };
    case getViralPosts.request.toString():
      return {
        ...state,
        loading: true,
      }
    case getViralPosts.success.toString():
      return {
        ...state,
        viralPosts: action.payload.data,
        loading: false
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