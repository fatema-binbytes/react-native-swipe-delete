import React, { Component } from 'react'
import { View, FlatList, UIManager, LayoutAnimation } from 'react-native'

import Item from './src/item'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props)
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    this.state = {
      closedIndices: [],
      data:this.props.data,
      currentLength:this.props.data.length,
      position:null
    }
  }
  shouldRender = index => {
    return this.state.closedIndices.indexOf(index) === -1
  }
  delete(index) {
    var CustomLayoutSpring = {
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
    this.state.position == "left" ? this.props.onSwipeLeft(index): this.props.onSwipeRight(index)
    if(data.length < this.state.currentLength){
        delete this.state.closedIndices[this.state.closedIndices.length - 1]
      }
  }
  onRelease(index) {
    this.setState({ previous: index })
  }
  render() {
    return (
      <View style={{ backgroundColor: '#178044' }}>
        <FlatList
          data={this.props.data.slice()}
          renderItem={({ item, index }) => {
            return (
              this.shouldRender(index) && (
                <View>
                  <Item
                    item={item}
                    position={position => this.setState({position})}
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
  onSwipeRight: PropTypes.func.isRequired,
  onSwipeLeft: PropTypes.func.isRequired
}

export default App
