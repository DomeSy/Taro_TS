// 封装Redux，简化使用
import Taro from '@tarojs/taro'
import request from '../request'
// import userRequest from './jmas/userRequest'

interface Type{
  url?: string,
  path?: string,
  payload?: any,
  method?: string,
  fetchOptions?: any,
  cb?: any,
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
export default function createAction({ url, path, payload, method, fetchOptions, cb, type }:Type, way:string= 'request') {
  return async (dispatch) => {
    if(way === 'user') {
      // const res = await userRequest({ payload });
      // 如果返回的是false，则需要走登录失败的方法
      // res ? dispatch({ type, payload: cb ? cb(res) : res }) : dispatch({type: USER_LOGOUT})
      // return res
    } else if(way == 'request'){
      const res = await request({ url, path, payload, method, ...fetchOptions });
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    }
  }
}
