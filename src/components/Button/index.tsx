import { FC } from 'react'
import { View  } from '@tarojs/components';
import { AtButton } from 'taro-ui'

import './index.scss'

type Props = {
  title?: string,
  onClick: any
}

const Button:FC<Props> = ({title = '提交', onClick=()=>{}}) => {
  return (
    <View className="DButton">
      <AtButton type='primary' className="DButton-btn" onClick={() => onClick()}>{title}</AtButton>
    </View>
  )
}

export default Button;
