import React, { Component} from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

class RightComponent extends Component {
    render() {
        return (
           <TouchableOpacity onPress={this.props.onPress}>
               <Icon name={'archive'} size={25} color={"#FFF"} />
            </TouchableOpacity>
        );
    }
}

export default RightComponent; 