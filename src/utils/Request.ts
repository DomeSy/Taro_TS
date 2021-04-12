import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Jump, Config } from '@utils'
// import Method from './Method';

const CODE_SUCCESS = 200
interface Type{
  url?: string,
  payload?: any,
  method?: any,
  path?: string,
  loading?: boolean,
  alldata?: boolean,
  local?: string
}


// 封装请求
async function Request({url, payload = {}, method = 'GET', path = '', loading = false, local = 'php', alldata = false}:Type) {

  const header = {}

  if(local === 'php'){
    local = Config.phpUrl
  }

  if (method === 'POST' && Taro.getEnv() !== 'WEB') {
    header['content-type'] = 'application/json'
  }

  return new Promise((resolve) => {
    if(loading){
      Taro.showLoading({
        title: '加载中....'
      })
    }
    Taro.request({
      url: path ? path : local + url,
      method,
      data: payload,
      header
    }).then(async (res) => {
      if(loading){
        Taro.hideLoading()
      }
      console.log(res,'--998')
      const { statusCode, data } = res

      if(statusCode !== CODE_SUCCESS){
        Taro.showToast({
          title: '接口异常',
          icon: 'none'
        })
        return
      }
      if(data.a !== 0){
        Taro.showToast({
          title: data.m,
          icon: 'none'
        })
        return
      }
      const result = alldata ? data : data.d
      resolve(result)
    }).catch((err) => {
      // 接口异常是获取从那个页面的地址，用于刷新页面
      // const { path } = getCurrentInstance().router;
      const defaultMsg = '请求异常'

      // Jump({url: '/catch', method: 'reLaunch', payload: { catchPath: path }})
      return Promise.reject({ message: defaultMsg, ...err })
    })
  })
}

export default Request
