import { Component } from 'react'
import { View, } from '@tarojs/components'
import { Button } from '@components';
import { Jump } from '@utils';


import './index.scss'

interface Iprops {
  prop?: string
}

interface IState {
  n: number
}

class Index extends Component<Iprops, IState> {

  constructor(props: Iprops) {
    super(props)
    this.state = {
      n: 1
    }
}

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  click = () => {
    console.log('1')
    Jump({url: '/login'})
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={() => this.click()} />
      </View>
    )
  }
}

export default Index

