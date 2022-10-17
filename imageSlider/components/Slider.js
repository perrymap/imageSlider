import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
const height = width * 2

export default class Slider extends React.Component {
  state = {
    active: 0,
  }
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    )
    if (slide !== this.state.active) {
      this.setState({ active: slide })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          onScroll={this.change}
          pagingEnabled
          horizontal
          style={styles.scroll}
        >
          {this.props.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {this.props.images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active ? styles.bulletActive : styles.bullet
              }
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  bullet: {
    color: '#888',
    margin: 3,
  },
  bulletActive: {
    color: '#fff',
    margin: 3,
  },
})
