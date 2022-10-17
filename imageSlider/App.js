import React from 'react'
import { View } from 'react-native'
import Slider from './components/Slider'
import images from './components/Images'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Slider images={images} />
      </View>
    )
  }
}
