export const GET_IMAGES_DATA = 'GET_IMAGES_DATA';
import { createRequest } from '../../sagas/utils'

export const getImagesData = createRequest('GET_IMAGES')
export const getFavoriteImages = createRequest('GET_FAVORITE_IMAGES')
export const favoriteImage = createRequest('FAVORITE_IMAGE')
export const getViralImages = createRequest('GET_VIRAL_IMAGES')
export const uploadImage = createRequest('UPLOAD_IMAGE')