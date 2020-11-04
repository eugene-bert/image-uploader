import { createRequest } from '@/sagas/utils'

export const getImagesData = createRequest('GET_IMAGES')
export const getFavoriteImages = createRequest('GET_FAVORITE_IMAGES')
export const updateImageInfo = createRequest('UPDATE_IMAGE_INFO')
export const favoriteImage = createRequest('FAVORITE_IMAGE')
export const getViralPosts = createRequest('GET_VIRAL_POSTS')
export const uploadImage = createRequest('UPLOAD_IMAGE')
export const deleteImage = createRequest('DELETE_IMAGE')