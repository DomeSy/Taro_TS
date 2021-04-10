import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { GetPhone, GetUserInfo } from './components'
import { Button } from '@components'
import './login.scss'

class Login extends Component {

  constructor(props){
    super(props)
  }


  onLogin = () => {
    // Taro.openSetting({
    //   success: function (res) {
    //     console.log(res.authSetting)
    //   }
    // })

    Taro.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  }

  render () {
    return (
      <View className='Login'>
        <GetPhone />
        <GetUserInfo />
      </View>
    )
  }
}

export default Login

