import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button } from '@components'
import { OpenData } from '@tarojs/components'
import { Request, Modal, Method } from '@utils'

class GetUserInfo extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () => {

  }

  getUser = async (e) => {

    const { errMsg, encryptedData, iv } = e.detail;

    if(errMsg === 'getUserInfo:ok'){
      const login = await Taro.login()
      const payload = {
        code: login.code,
        encryptedData,
        iv
      }
      const res:any = await Request({url: 'userInfo', payload})
      console.log(res,'010')

      // const { unionId } = JSON.parse(res)
      // const sign = Method.md5('xiongMaoBmx888'+ unionId)
      // const result = await Request({url: 'getUserPhone', method:"POST", payload:{unionId, sign}})
      // console.log(result,'00')
    }
  }

  render () {
    return (
      <>
       <Button title="用户信息" openType="getUserInfo"  getUser={(e) => this.getUser(e)} />
      </>
    )
  }
}

export default GetUserInfo

