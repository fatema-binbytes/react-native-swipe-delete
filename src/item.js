import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  PanResponder,
  Animated,
  Dimensions,
 } from 'react-native'
import PropTypes from 'prop-types'

import styles from './item-style'
import BackgoundView from './backgoundView'

let left = 'left'
let right = 'right'
let duration = 200
let zero = 0
let backgroundColor = '#178044'
let screenWidth = Dimensions.get('window').width

class SwipeItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'white',
      previousIndex: this.props.previous,
      currentIndex: this.props.index,
      undo: false
    }
    this.translateX = new Animated.Value(zero)
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: (e, gestureState) => {
        !this.props.swipeOff ? this.handlePanResponderMove(e, gestureState) : null 
      },
      onPanResponderRelease: (e, { vx, dx }) => {
        !this.props.swipeOff ? this.panResponderRelease(vx,dx) : alert("To Swipe Item Pass Swipe props") 
      }
    })
  }

  handlePanResponderMove(e, gestureState) {
    const absDx = Math.floor(gestureState.dx)
    this.setState({ backgroundColor: backgroundColor, undo: false })
    if( this.props.swipeLeft && !this.props.swipeRight ) {
      const translate = absDx < zero ? this.translateX : null
      Animated.event([null, { dx: translate }])(e, gestureState) 
    }
    if( this.props.swipeRight && !this.props.swipeLeft ) {
      const translate = absDx > zero ? this.translateX : null
      Animated.event([null, { dx: translate }])(e, gestureState)
      }
    if( this.props.swipeLeft && this.props.swipeRight ) {
      const translate = this.translateX 
      Animated.event([null, { dx: translate }])(e, gestureState)
    }
  }
  
  panResponderRelease(vx, dx) {
    if(this.props.swipeLeft && !this.props.swipeRight ) {
      const toValue = dx < zero ? -screenWidth : zero
      const condition = dx < zero 
      this.handlePanResponderRelease(vx, dx, toValue, condition)
    } 
    if( this.props.swipeRight && !this.props.swipeLeft ) {
      const toValue = dx > zero ? screenWidth : zero
      const condition = dx > zero
      this.handlePanResponderRelease(vx, dx, toValue, condition)
      }
    if( this.props.swipeLeft && this.props.swipeRight ) {
      const toValue = dx < zero ? -screenWidth : screenWidth
      const condition = true
      this.handlePanResponderRelease(vx, dx, toValue, condition)
    } else {
      null
    }
  }

  handlePanResponderRelease(vx, dx, toValue, condition) {
    if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
      Animated.timing( this.translateX, {
        toValue: toValue,
        duration: duration
      }).start(() => {
        this.props.direction( dx > zero ? right : left )
       condition ? (
        this.props.onRelease(),
        setTimeout(() => {
          if (!this.state.undo) {
            this.props.onGrant(this.props.index)
          }
        }, 500)) : null
      })
    } else {
      Animated.spring( this.translateX, {
        toValue: zero,
        bounciness: 10,
      }).start()
    }
  }

  touchUndo = () => {
    this.setState({ undo: true })
    Animated.timing(this.translateX, {
      toValue: zero,
      duration: duration
    }).start( this.props.onRelease(this.state.previousIndex) )
  }

  render() {
    const { displayPicture, chat, time, userIdName } = this.props.item
    const { backgoundView } = this.props
    return (
      <View>
        <View
          style={[
            styles.container,
            { backgroundColor: this.state.backgroundColor }
          ]}
        >
          <View style={[ styles.backRow ]}>
           { backgoundView ? backgoundView : <BackgoundView onPress={ this.touchUndo }/> }
          </View>
          <Animated.View
            style={[
              { transform: [ {translateX: this.translateX }] },
              styles.animatedContainer
            ]}
            {...this._panResponder.panHandlers}
          >
            <View style={{ paddingLeft: 2 }}>
              <Image style={ styles.image } source={ displayPicture } />
            </View>
            <View style={ styles.subContainer }>
              <View>
                <View style={ styles.txtContainer }>
                  <Text style={ styles.txt }>{ userIdName }</Text>
                  <Text style={{ color: '#418bfa' }}>{ time }</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ flex: 1 }}>{ chat }</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    )
  }
}
SwipeItem.propTypes = {
  item:  PropTypes.object.isRequired,
}
export default SwipeItem