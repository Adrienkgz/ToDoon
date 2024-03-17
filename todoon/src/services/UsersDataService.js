import http from './http-common'

class UserDataService {
  signup (data) {
    return http.post('/user/signup', data)
  }

  login (data) {
    return http.post('/user/login', data)
  }

  getUser () {
    return http.get('/user/getUser')
  }

  updateUser (data) {
    return http.post('/user/updateUser', data)
  }

  changePassword (oldPassword, newPassword) {
    return http.post('/user/changePassword', { oldPassword, newPassword })
  }

  deleteUser () {
    return http.delete('/user/deleteUser')
  }

  searchByEmail (email) {
    return http.get(`/user/searchByEmail/${email}`)
  }

  findOne (id) {
    return http.get(`/user/${id}`)
  }
}

export default new UserDataService()
