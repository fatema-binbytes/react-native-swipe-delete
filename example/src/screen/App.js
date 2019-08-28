import React, { Component } from "react";
import Item from "react-native-swipe-delete-view";

import BackComponent from '../component/backgroundRow';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [
        {
          id:1,
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "BT-IDBWRF"
        },
        {
          id:2,
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "IG-Idea"
        },
        { id:3,
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "59823"
        },
        { 
          id:4,
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "BT-IDBWRF"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "BT-IDBWRF"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "IG-Idea"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "59823"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "BT-IDBWRF"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "BT-IDBWRF"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "IG-Idea"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "59823"
        },
        {
          displayPicture: require("../../images/BinStorm.png"),
          chat: "Running application ListDeleteImage with appParams:",
          time: "3:14 pm",
          userIdName: "BT-IDBWRF"
        }
      ],
    };
  }
  
  onSwipeLeft(i) {
   //this.state.data.splice(i, 1);
    console.log(i)
  }

  onSwipeRight(i) {
    //this.state.data.splice(i, 1);
     console.log(i)
   }
   render() {
    return ( 
      <Item 
        onSwipeLeft={i => this.onSwipeLeft(i)}
        onSwipeRight={i => this.onSwipeRight(i)} 
        data={this.state.data} 
        backComponent={<BackComponent/>}
      />
    )
  }
}

export default App;
