import http from './http-common'

class CategoryDataService {
  create (data) {
    return http.post('/category', data)
  }

  getAll () {
    return http.get('/category')
  }

  getAllByUser (userId) {
    return http.get(`/tasks/${userId}`)
  }
}
export default new CategoryDataService()
