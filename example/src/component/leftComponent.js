import React, { Component} from 'react'
import { TouchableOpacity, Text } from 'react-native'

class LeftComponent extends Component {
   render() {
        return (
            <TouchableOpacity>
                <Text style={{ color: "white", fontSize: 18 }}>{'Undo'}</Text>
            </TouchableOpacity>
        
        )
    }
}
export default LeftComponent; 