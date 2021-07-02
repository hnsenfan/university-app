import axios from 'axios'

const baseURL = 'http://localhost:8082/api'
const externalURL = 'http://universities.hipolabs.com'

const callAxios = (source) => {
  return axios.create({
    baseURL: source,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const END_POINTS = {
  getUserList () {
    return callAxios(baseURL).get('/user_list')
  },
  patchUserList (favUniversities) {
    return callAxios(baseURL).patch('/fav_universities', {
      username: 'hansen@developer.com',
      fav_universities: favUniversities
    })
  },
  getUniversityBySearchCat (params) {
    return callAxios(externalURL).get('/search', {
      params: params
    })
  },
}