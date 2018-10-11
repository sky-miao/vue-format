import config from '@/utils/config'
const { ApiPath } = config
const Mock = require('mockjs')
const Random = Mock.Random

const homeList = function () {
  let list = []
  for (let i = 0; i < 20; i++) {
    let item = {
      title: Random.csentence(5, 30),
      date: Random.date() + ' ' + Random.time()
    }
    list.push(item)
  }
  return {
    'code': 0,
    'data': list,
    'msg': 'success'
  }
}
// exchange data
// 拦截请求返回假数据
Mock.mock(ApiPath.homeUrl, 'get', homeList)
