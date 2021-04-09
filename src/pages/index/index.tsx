import { Component } from 'react'
import { View, } from '@tarojs/components'
// import { Button } from '@components';


import './index.scss'

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Button /> */}
        你哈
      </View>
    )
  }
}

export default Index

