import React, { Component} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class BackgoundView extends Component {
   render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{ color: 'white', fontSize: 18 }}>{'Undo'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
})
export default BackgoundView 