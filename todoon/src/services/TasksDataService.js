import http from './http-common'

class TasksDataService {
  getAll () {
    return http.get('/tasks')
  }

  create (data) {
    return http.post('/tasks', data)
  }

  get (id) {
    return http.get(`/tasks/${id}`)
  }

  update (id, data) {
    return http.put(`/tasks/${id}`, data)
  }

  delete (id) {
    return http.delete(`/tasks/${id}`)
  }

  getAllByUser (userId) {
    return http.get(`/tasks/${userId}`)
  }

  deleteAllTasksFromThisUser () {
    return http.delete('/tasks')
  }

  getAllByProject (projectId) {
    return http.get(`/tasks/project/${projectId}`)
  }
}
export default new TasksDataService()
