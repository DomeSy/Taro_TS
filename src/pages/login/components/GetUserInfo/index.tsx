import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button } from '@components'

class GetUserInfo extends Component {

  constructor(props){
    super(props)
  }
  getUser = (e) => {
    const { errMsg, encryptedData, iv, rawData, signature} = e;
    if(errMsg === 'getUserInfo:ok'){

    }
  }

  render () {
    return (
      <Button title="用户信息" openType="getUserInfo"  getUser={(e) => this.getUser(e)} />
    )
  }
}

export default GetUserInfo

