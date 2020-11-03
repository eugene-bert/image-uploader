export const GET_IMAGES_DATA = 'GET_IMAGES_DATA';
import { createRequest } from '../../sagas/utils'

export const getImagesData = createRequest('GET_IMAGES')
export const getFavoriteImages = createRequest('GET_FAVORITE_IMAGES')
export const updateImageInfo = createRequest('UPDATE_IMAGE_INFO')
export const favoriteImage = createRequest('FAVORITE_IMAGE')
export const getViralPosts = createRequest('GET_VIRAL_POSTS')
export const uploadImage = createRequest('UPLOAD_IMAGE')