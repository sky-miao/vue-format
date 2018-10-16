import {
  GET, POST
} from '@/utils/request.js'
import config from '@/utils/config'
const { BaseURL, ApiPath } = config

// 获取新闻列表
export function getHomeList (params, options) {
  let url = ApiPath.homeUrl
  return GET(url, params, options)
}

// 获取新闻列表
export function getList (params, options) {
  let url = ApiPath.listUrl
  return POST(url, params, options)
}
export function getPrice(params, options) {
  let url = ApiPath.listUrl
  let body = {
    id: 1,
    jsonrpc: '2.0',
    method: 'marketcap_getMarketCapInfo',
    params
  }
  return POST(url, body, options)
}
