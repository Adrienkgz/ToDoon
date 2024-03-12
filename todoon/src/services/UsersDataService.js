import http from './http-common'

class UserDataService {
  signup (data) {
    return http.post('/user/signup', data)
  }

  login (data) {
    return http.post('/user/login', data)
  }
}

export default new UserDataService()
