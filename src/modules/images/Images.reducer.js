import {getFavoriteImages, getImagesData, getViralPosts} from './images.actions';

const initialState = {
  images: [],
  viralPosts: [],
  favoriteImages: [],
  myImagesLoading: false,
  viralPostsLoading: false,
  favoriteImagesLoading: false
};

export const ImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getImagesData.request.toString():
      return {
        ...state,
        myImagesLoading: true
      }
    case getImagesData.success.toString():
      return {
        ...state,
        images: action.payload.data,
        myImagesLoading: false,
      };
    case getViralPosts.request.toString():
      return {
        ...state,
        viralPostsLoading: true
      }
    case getViralPosts.success.toString():
      return {
        ...state,
        viralPosts: action.payload.data,
        viralPostsLoading: false,
      };
    case getFavoriteImages.request.toString():
      return {
        ...state,
        favoriteImagesLoading: true
      }
    case getFavoriteImages.success.toString():
      return {
        ...state,
        favoriteImages: action.payload.data,
        favoriteImagesLoading: false,
      };
    default:
      return state;
  }
};
