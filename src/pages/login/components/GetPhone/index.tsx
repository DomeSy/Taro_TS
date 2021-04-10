import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button } from '@components'

class GetPhone extends Component {

  constructor(props){
    super(props)
    console.log(this,'----111')
  }


  onLogin = () => {

    Taro.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  }

  render () {
    return (

      <Button title="手机号"  onClick={() => this.onLogin()} />
    )
  }
}

export default GetPhone

