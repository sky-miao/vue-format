/**

 * @description 网络请求框架封装
 */

/* eslint-disable */
import QS from 'querystring'


// TODO 设置请求基本路径，所有请求路径之前会加上基本路径
// axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:8089'

// TODO 设置超时时间
axios.defaults.timeout = 10000

// TODO 设置请求头
axios.defaults.headers = {
  'Accept': '*/*',
  'Content-Type': 'application/json'
}

// TODO http code 校验
axios.defaults.validateStatus = function (status) {
  return status
}

// TODO GET 请求 params 序列化
axios.defaults.paramsSerializer = function (params) {
  return QS.stringify(params)
}

// TODO 设置POST等请求 body 序列化
/* axios.defaults.transformRequest = [function (body) {
  let data = body || {}
  if (body instanceof window.FormData) {
    return body
  }
  return JSON.stringify(data)
}] */

// TODO 设置统一请求拦截
axios.interceptors.response.use(response => {
  // 对于所有请求的不同的状态码进行不同的业务处理
  if (response.data.code === -1) {
    console.log(response.msg)
  }
  return response.data
}, error => {
  return Promise.reject(error)
})

/**
 * @description 统一 GET 请求
 * @param url
 */
function GET(url, params, option) {
  url = url.indexOf('//') > -1 ? url : ''
  if (option) {
    for (var property in option) {
      axios.defaults[property] = option[property]
    }
  }
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function POST(url, body, option) {
  url = url.indexOf('//') > -1 ? url : ''
  if (option) {
    for (var property in option) {
      axios.defaults[property] = option[property]
    }
  }
  body = JSON.stringify(body)
  return new Promise(function (resolve, reject) {
    axios.post(url, body)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export {
  GET,
  POST
}
