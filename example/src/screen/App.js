import React, { Component } from 'react'
import SwipeItem from 'react-native-swipe-delete-view'

import BackgoundView from '../component/backgoundView'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'BT-IDBWRF'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'IG-Idea'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: '59823'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'BT-IDBWRF'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'BT-IDBWRF'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'IG-Idea'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: '59823'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'BT-IDBWRF'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'BT-IDBWRF'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'IG-Idea'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: '59823'
        },
        {
          displayPicture: require('../../images/BinStorm.png'),
          chat: 'Running application ListDeleteImage with appParams:',
          time: '3:14 pm',
          userIdName: 'BT-IDBWRF'
        }
      ],
    }
  }
  
  onSwipeLeft(i) {
    alert('Item Swiped Left Side')
  }

  onSwipeRight(i) {
    alert('Item Swiped Right Side')
   }
   render() {
    return ( 
      <SwipeItem 
        onSwipeLeft={i => this.onSwipeLeft(i)}
        onSwipeRight={i => this.onSwipeRight(i)} 
        data={this.state.data} 
        backgoundView={<BackgoundView />}
      />
    )
  }
}

export default App
