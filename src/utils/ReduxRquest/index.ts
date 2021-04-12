// 封装Redux，简化使用
import Taro from '@tarojs/taro'
import request from '../request'
import userRequest from './userRequest'

interface Type{
  param?: any,
  type: string
}

/*
  way:
    user:用户
    quickLogin:快登
    request: 普通请求
  url: 部分地址
  path：完整地址
  payload：参数
  method: 方式
  fetchOptions： 其余操作
  cb：增加原有返回上的数据
  type：类型
*/
export default function createAction({ param, type }:Type, way:string= 'request') {
  return async (dispatch) => {
    const { __config, ...payload } = param
    if(way === 'user') {
      console.log(payload)
      const res = await userRequest({ payload });
      dispatch({ type, payload: res })
      return res
    } else if(way == 'request'){
      const { url, path, method, fetchOptions, cb } = __config
      const res = await request({ url, path, payload, method, ...fetchOptions });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    }
  }
}
