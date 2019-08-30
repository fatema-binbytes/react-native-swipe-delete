import React, { Component } from 'react'
import { View, FlatList, UIManager, LayoutAnimation } from 'react-native'

import Item from './src/item'
import PropTypes from 'prop-types'

let Left = 'left'
let Right = 'right'
let BackgroundColor = '#178044'

class App extends Component {
  constructor(props) {
    super(props)
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    this.state = {
      closedIndices: [],
      data:this.props.data,
      currentLength:this.props.data.length,
      direction:null,
      swipeOff: this.props.onSwipeLeft || this.props.onSwipeRight ? false : true,
      swipeLeft: this.props.onSwipeLeft ? true : false,
      swipeRight: this.props.onSwipeRight ? true : false
    }
  }
  shouldRender = index => {
    return this.state.closedIndices.indexOf(index) === -1
  }
  delete(index) {
  const CustomLayoutSpring = {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 10
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 10
      }
    }
   if (this.state.previous != -1) {
      LayoutAnimation.configureNext(CustomLayoutSpring)

      this.setState({
        closedIndices: [...this.state.closedIndices, index]
      })
    }
    let data = this.props.data
    this.onSwipe(index)
    if(data.length < this.state.currentLength){
       delete this.state.closedIndices[this.state.closedIndices.length - 1]
      }
      console.log(this.state.closedIndices,data,data.length < this.state.currentLength)
  }
  
  onSwipe(index) {
    if(this.props.onSwipeLeft && !this.props.onSwipeRight ) {
      if( this.state.direction == Left ) {
        // alert('Item swiped left side')
        this.props.onSwipeLeft(index) 
      }
    } else if( !this.props.onSwipeLeft && this.props.onSwipeRight ) {
        if( this.state.direction == Right ) {
          // alert('Item swiped right side')
           this.props.onSwipeRight(index) 
        }
    } else if( this.props.onSwipeLeft && this.props.onSwipeRight ) {
     if( this.state.direction == Left ) {
      // alert('Item swiped left side')
        this.props.onSwipeLeft(index) 
      } else {
        // alert('Item swiped right side')
        this.props.onSwipeRight(index)
      }
    } 
    else {
      this.setState({swipeOff:true})
    }
  }

  onRelease(index) {
    this.setState({ previous: index })
  }

  render() {
    return (
      <View style={{ backgroundColor: BackgroundColor }}>
        <FlatList
          data={this.props.data.slice()}
          renderItem={({ item, index }) => {
            return (
              this.shouldRender(index) && (
                <View>
                  <Item
                    item={item}
                    direction={direction => this.setState({direction})}
                    swipeOff={this.state.swipeOff}
                    swipeLeft={this.state.swipeLeft}
                    swipeRight={this.state.swipeRight}
                    onGrant={i => this.delete(i)}
                    onRelease={() => this.onRelease(index)}
                    previous={this.state.previous}
                    index={index}
                    backgoundView={this.props.backgoundView}
                  />
                </View>
              )
            )
          }}
          keyExtractor={(item, index) => `${index}`}
         />
      </View>
    )
  }
}
App.propTypes = {
  data:  PropTypes.array.isRequired,
  onSwipeRight: PropTypes.func,
  onSwipeLeft: PropTypes.func
}

export default App
