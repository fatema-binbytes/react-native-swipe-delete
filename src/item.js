import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  PanResponder,
  Animated,
  Dimensions,
  UIManager,
 } from 'react-native'
import PropTypes from 'prop-types'
import styles from './item-style'
import BackgoundView from './backgoundView'

class Item extends Component {
  constructor(props) {
    super(props)
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    this.state = {
      backgroundColor: 'white',
      previousIndex: this.props.previous,
      currentIndex: this.props.index,
      undo: false
    }
    this.translateX = new Animated.Value(0)
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderMove: (e, gestureState) => {
        this.setState({ backgroundColor: '#178044', undo: false })
        Animated.event([null, { dx: this.translateX }])(e, gestureState)
      },
      onPanResponderRelease: (e, { vx, dx }) => {
        this.touchRelease(vx, dx)
      }
    })
  }
  touchRelease(vx, dx) {
    const screenWidth = Dimensions.get('window').width
    if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
      Animated.timing(this.translateX, {
        toValue: dx > 0 ? screenWidth : -screenWidth,
        duration: 200
      }).start(() => {
        this.props.onRelease()
        setTimeout(() => {
          if (!this.state.undo) {
            this.props.onGrant(this.props.index)
          }
        }, 500)
      })
    } else {
      Animated.spring(this.translateX, {
        toValue: 0,
        bounciness: 10,
      }).start()
    }
  }
  touchUndo = () => {
    this.setState({ undo: true })
    Animated.timing(this.translateX, {
      toValue: 0,
      duration: 200
    }).start(this.props.onRelease(this.state.previousIndex))
  }

  render() {
    const { displayPicture, chat, time, userIdName,} = this.props.item
    const { backgoundView } = this.props
    return (
      <View>
        <View
          style={[
            styles.container,
            { backgroundColor: this.state.backgroundColor }
          ]}
        >
          <View style={[styles.backRow]}>
           {backgoundView ? backgoundView : <BackgoundView onPress={this.touchUndo}/>}
          </View>
          <Animated.View
            style={[
              { transform: [{ translateX: this.translateX }] },
              styles.animatedContainer
            ]}
            {...this._panResponder.panHandlers}
          >
            <View style={{ paddingLeft: 2 }}>
              <Image style={styles.image} source={displayPicture} />
            </View>
            <View style={styles.subContainer}>
              <View>
                <View style={styles.txtContainer}>
                  <Text style={styles.txt}>{userIdName}</Text>
                  <Text style={{ color: '#418bfa' }}>{time}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1 }}>{chat}</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    )
  }
}
Item.propTypes = {
  item:  PropTypes.object.isRequired,
}
export default Item