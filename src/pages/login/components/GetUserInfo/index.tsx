import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button } from '@components'
import { Request } from '@utils'

class GetUserInfo extends Component {

  constructor(props){
    super(props)
  }
  getUser = (e) => {
    const { errMsg, encryptedData, iv, rawData, signature} = e;
    if(errMsg === 'getUserInfo:ok'){
      // const res = Request({})
      // console.log(res,'--')
    }
  }

  render () {
    return (
      <Button title="用户信息" openType="getUserInfo"  getUser={(e) => this.getUser(e)} />
    )
  }
}

export default GetUserInfo

