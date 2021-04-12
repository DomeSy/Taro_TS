import { Component } from 'react'
import { Button } from '@components'
import { connect } from 'react-redux'
import * as userActions from '../../../../actions/user'

interface Iprops {
  userInfo?: any,
  login?: boolean,
  DUSERINIT?:any
}

// @ts-ignore
@connect(({user}) => ({...user}), { ...userActions})
class GetUserInfo extends Component<Iprops, {}> {

  constructor(props:Iprops){
    super(props)
  }

  componentDidMount = () => {

  }

  getUser = async (e) => {
    const { errMsg, encryptedData, iv } = e.detail;
    const { DUSERINIT } = this.props
    DUSERINIT({ errMsg, encryptedData, iv })
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

