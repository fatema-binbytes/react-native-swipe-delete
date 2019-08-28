import React, { Component } from 'react'
import Item from 'react-native-swipe-delete-view'

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
   //this.state.data.splice(i, 1)
    console.log(i)
  }

  onSwipeRight(i) {
    //this.state.data.splice(i, 1)
    console.log(i)
  }
   render() {
    return ( 
      <Item 
        onSwipeLeft={i => this.onSwipeLeft(i)}
        onSwipeRight={i => this.onSwipeRight(i)} 
        data={this.state.data} 
        backgoundView={<BackgoundView />}
      />
    )
  }
}

export default App
