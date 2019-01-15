import React,{Component} from 'react';
import {Text,View} from 'react-native';

class A extends Component{
    constructor(props){
        super(props);
        this.state ={isShowingText:true};
        //Toggle the state for every second
        setInterval(()=>(
            this.setState(previousState=>(
                {isShowingText:!previousState.isShowingText}
            ))
        ),1000);
    }
    render(){
        if(!this.state.isShowingText){
            return null;
        }
        return(
            <Text>{this.props.text}</Text>
        );

    }
}

export default class M1 extends Component{
    render(){
        return(
            <View style={{width: 80, height: 50, backgroundColor: 'powderblue'}}>
                <A text="INDIA"/>
                <A text="PAK"/>
            </View>
        )
    }
}