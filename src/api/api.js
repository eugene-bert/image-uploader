import axios  from 'axios'
import { getToken } from '@/rootSelector'
import { getUserName } from '@/rootSelector';

const userName = getUserName()
const urls = {
  getImages: `/account/${userName}/images/`,
  getFavoriteImages:`/account/${userName}/favorites/`,
  uploadImage: `/image`,
  addComment: `/comment`
}


function makePostRequest(url, params) {
  const token = getToken()
  return axios.post(`${process.env.REACT_APP_API_URL}${url}`, params, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function makeGetRequest(url) {
  const token = getToken()
  return axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

function makeDeleteRequest(url, id) {
  const token = getToken()
  return axios.delete(`${process.env.REACT_APP_API_URL}${url}/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

class Api {
  async getImages() {
    const res = await makeGetRequest(urls.getImages)
    return res.data
  }

  async getViralPosts(page) {
    const res = await makeGetRequest(`/gallery/hot/viral/${page}`)
    return res.data
  }

  async getFavoriteImages() {
    const res = await makeGetRequest(urls.getFavoriteImages)
    return res.data
  }

  async getComments(id) {
    const res = await makeGetRequest(`/gallery/${id}/comments/new`)
    return res.data
  }

  async favoriteImage(image) {
    const res = await makePostRequest(`/image/${image}/favorite`)
    return res.data
  }

  async updateImageInfo(payload) {
    const res = await makePostRequest(`/image/${payload.image}`, payload.data)
    return res.data
  }

  async uploadImage(image) {
    const res = await makePostRequest(urls.uploadImage, image)
    return res.data
  }

  async deleteImage(id) {
    const res = await makeDeleteRequest(`/image/${id}`)
    return res.data
  }


  async addComment(payload) {
    const res = await makePostRequest(urls.addComment, payload)
    return res.data
  }

}

export default new Api()