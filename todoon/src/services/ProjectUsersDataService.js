import http from './http-common'

class ProjectUsersDataService {
  getAllByProject (idproject) {
    return http.get(`/project-users/project/${idproject}`)
  }

  getAllByUser () {
    return http.get('/project-users/user/')
  }

  createCollaborator (idproject, collaborator) {
    return http.post(`/project-users/${idproject}`, collaborator)
  }

  removeCollaborator (idproject, iduser) {
    return http.delete(`/project-users/${idproject}/${iduser}`)
  }
}
export default new ProjectUsersDataService()
