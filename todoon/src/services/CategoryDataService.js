import http from './http-common'

class CategoryDataService {
  getAll () {
    return http.get('/tasks')
  }

  getAllByUser (userId) {
    return http.get(`/tasks/${userId}`)
  }
}
export default new CategoryDataService()
