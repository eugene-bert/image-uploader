import axios  from 'axios'
import { getToken } from '../rootSelector'
import { getUserName } from '../rootSelector';

const userName = getUserName()
const urls = {
  getImages: `/account/${userName}/images/`,
  getViralImages: `/gallery/hot/viral/1`,
  uploadImage: `/image`
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

  async getViralImages() {
    const res = await makeGetRequest(urls.getViralImages)
    return res.data
  }

  async uploadImage(image) {
    const res = await makePostRequest(urls.uploadImage, image)
    return res.data
  }
}

export default new Api()