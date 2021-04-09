import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui'

import './index.scss'

type Props = {
  title?: string,
  onClick: any
}

const Button = ({title = '提交', onClick}: Props) =>{

  const click = () => {
    onClick ? onClick() : ''
  }

  return (
    <View className="DButton">
      <AtButton type='primary' className="DButton-btn" onClick={() => click()}>{title}</AtButton>
    </View>
  )
}

export default Button;
