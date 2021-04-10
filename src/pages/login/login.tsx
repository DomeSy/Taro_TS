import { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { GetPhone } from './components'
import { Button } from '@components'
import './login.scss'

class Login extends Component {

  constructor(props){
    super(props)
    console.log(this,'----111')
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
      </View>
    )
  }
}

export default Login

