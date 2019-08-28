import React, { Component} from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

class BackgoundView extends Component {
   render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{ color: 'white', fontSize: 18 }}>{'Undo'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Image source={require('../image/archive.png')} style={{height:20,width:20}}/>
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