import { Component } from 'react'
import { View, } from '@tarojs/components'
import { Button } from '@components';


import './index.scss'

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  click = () => {
    console.log('1')
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={() => this.click()} />
        你哈靸鞋
      </View>
    )
  }
}

export default Index

