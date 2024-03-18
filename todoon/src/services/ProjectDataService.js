import http from './http-common'

class ProjectDataService {
  create (data) {
    return http.post('/projects', data)
  }

  update (id, data) {
    return http.put(`/projects/${id}`, data)
  }

  getAllByUser () {
    return http.get('/projects/')
  }

  delete (id) {
    return http.delete(`/projects/${id}`)
  }

  deleteAllProjectsFromThisUser () {
    return http.delete('/projects')
  }

  findOne (id) {
    return http.get(`/projects/${id}`)
  }
}
export default new ProjectDataService()
