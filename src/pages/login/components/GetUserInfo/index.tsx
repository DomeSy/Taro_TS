import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button } from '@components'
import { Request } from '@utils'

class GetUserInfo extends Component {

  constructor(props){
    super(props)
  }
  getUser = async (e) => {
    const { errMsg, encryptedData, iv, rawData, signature} = e.detail;

    if(errMsg === 'getUserInfo:ok'){
      const login = await Taro.login()
      const payload = {
        code: login.code,
        encryptedData,
        iv
      }
      const res = await Request({url: 'userInfo', payload})
      console.log(res,'--')
    }
  }

  render () {
    return (
      <Button title="用户信息" openType="getUserInfo"  getUser={(e) => this.getUser(e)} />
    )
  }
}

export default GetUserInfo

