import {getFavoriteImages, getImagesData, getViralPosts} from './images.actions';

const initialState = {
  images: [],
  viralPosts: [],
  favoriteImages: [],
  myImagesLoading: false,
  viralPostsLoading: false,
  favoriteImagesLoading: false,
  myImagesError: {},
  viralPostsError: {},
  favoriteImagesError: {}
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
    case getImagesData.failure.toString():
      return {
        ...state,
        myImagesError: action.payload.response
      }
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
    case getViralPosts.failure.toString():
      return {
        ...state,
        viralPostsError: action.payload.response
      }
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
    case getFavoriteImages.failure.toString():
      return {
        ...state,
        favoriteImagesError: action.payload.response
      } 
    default:
      return state;
  }
};
