import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui'

import './index.scss'

type Props = {
  title?: string,
  openType?: string,
  onClick: any
}

const Button = ({title = '提交', openType, onClick=()=>{}}: Props) =>{

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
        // openType={openType || undefined}
        openType='getPhoneNumber'
        className="DButton-btn"
        onGetPhoneNumber={(e)=>onGetPhoneNumber(e)}
        onClick={() => click()}
      >
        {title}
      </AtButton>
    </View>
  )
}

export default Button;
