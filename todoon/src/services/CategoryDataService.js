import http from './http-common'

class CategoryDataService {
  create (data) {
    return http.post('/category', data)
  }

  getAllByUser () {
    return http.get('/category')
  }

  deleteAllCategoriesFromThisUser () {
    return http.delete('/category')
  }
}
export default new CategoryDataService()
