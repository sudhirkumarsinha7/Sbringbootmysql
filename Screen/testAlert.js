import React,{Component} from 'react';
import {Alert,Button,View} from 'react-native'

export default class ButtonBasics extends Component{
    _onPressButton(){
        Alert.alert('You Tapped the Button')
    }
    render(){
        return(
            <View>
                <Button
                    onPress ={this._onPressButton}
                    title="Press Me"/>
            </View>
        )
    }
}