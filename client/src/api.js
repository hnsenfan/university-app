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
  getUserProfile (username = 'hansen@developer.com') {
    return callAxios(baseURL).get(`/user_profile?username=${username}`)
  },
  patchUserProfile(params) {
    return callAxios(baseURL).patch('/user_profile', {
      username: 'hansen@developer.com',
      full_name: params.full_name,
      nationality: params.nationality,
      residence: params.residence
    })
  },
  patchNewsletterSubscription(subscribe) {
    return callAxios(baseURL).patch('/subscribe_newsletter', {
      username: 'hansen@developer.com',
      subscribe_newsletter: subscribe
    })
  },
  patchFavouriteUniversities (favUniversities) {
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