import Taro from '@tarojs/taro'
import { Request, Method } from '@utils'

// 封装请求 payload: index 是channels的索引值，根据jmas来加的，目前只有两个
async function userRquest({ payload}) {
  // const res = await channelfirst(payload);
  console.log(payload, '111')

  const { errMsg, encryptedData, iv } = payload

  if(errMsg === 'getUserInfo:ok'){
    const login = await Taro.login()
    const payload = {
      code: login.code,
      encryptedData,
      iv
    }
    const res:any = await Request({url: 'userInfo', payload})
    const { unionId } = JSON.parse(res)
    const sign = await Request({url: 'getCheckSign'})
    const userSign = Method.md5(sign + unionId)
    const result:any = await Request({url: 'getUserPhone', method:"POST", payload:{unionId, sign: userSign}})
    return {
      sign,
      ...result,
      ...JSON.parse(res)
    }
  }
}


export default userRquest
