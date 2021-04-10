import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button } from '@components'

class GetPhone extends Component {

  constructor(props){
    super(props)
  }


  onLogin = (e) => {
    console.log(e,'----111')
    const { errMsg, encryptedData, iv } = e.detail
    if(errMsg === 'getPhoneNumber:ok'){
      const accountInfo = Taro.getAccountInfoSync();
      console.log(accountInfo)
    }
  }

  render () {
    return (
      <Button title="手机号" openType="getPhoneNumber"  getPhone={(e) => this.onLogin(e)} />
    )
  }
}

export default GetPhone

