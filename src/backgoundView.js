import React, { Component} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

class BackgoundView extends Component {
   render() {
        return (
            <View style={styles.container}>
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
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
})
export default BackgoundView; 