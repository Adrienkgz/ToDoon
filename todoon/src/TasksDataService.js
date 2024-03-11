import http from './http-common'

class TasksDataService {
  getAll () {
    return http.get('/task')
  }

  create (data) {
    return http.post('/task', data)
  }

  get (id) {
    return http.get(`/task/${id}`)
  }

  update (id, data) {
    return http.put(`/task/${id}`, data)
  }

  delete (id) {
    return http.delete(`/task/${id}`)
  }

  getAllByUser (userId) {
    return http.get(`/task/${userId}`)
  }
}
export default new TasksDataService()
