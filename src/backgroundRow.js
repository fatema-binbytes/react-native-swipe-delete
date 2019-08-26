import React, { Component} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

class LeftComponent extends Component {
   render() {
        return (
            <View style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                <TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 18 }}>{'Undo'}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
               <Icon name={'archive'} size={25} color={"#FFF"} />
            </TouchableOpacity>
            </View>
        )
    }
}
export default LeftComponent; 