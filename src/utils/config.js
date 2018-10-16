
let baseUrl = process.env.BASE_URL || 'http://localhost:8089'

module.exports = {
  ApiPath: {
    homeUrl: `${baseUrl}/home`,
    listUrl: `${baseUrl}/getList`
  }
}
