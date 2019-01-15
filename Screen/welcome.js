import React,{ Component} from 'react';
import {Text,View,StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    Green: {
        color: 'green',
      },
  });
export default class Welcome extends Component{
    render(){
        return (
            <View>
                <Text style={styles.Green}>Hello KII</Text>
            </View>
        )
    }
}
