import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui'

import './index.scss'

type Props = {
  title?: string,
  openType?: string,
  onClick?: any,
  getPhone?:any,
  getUser?: any
}

const Button = ({title = '提交', openType, onClick=()=>{}, getPhone=()=>{}, getUser=()=>{}}: Props) =>{

  const click = () => {
    onClick ? onClick() : ''
  }
  const onGetPhoneNumber = e => {
    console.log(e,'--121')
  }

  return (
    <View className="DButton">
      <AtButton
        type='primary'
        openType={openType || undefined}
        // openType='getPhoneNumber'
        className="DButton-btn"
        onGetPhoneNumber={(e) => getPhone(e)}
        onGetUserInfo={(e) => getUser(e)}
        onClick={() => click()}
      >
        {title}
      </AtButton>
    </View>
  )
}

export default Button;
