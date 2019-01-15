import React,{Component} from 'react';
import {Text,View} from 'react-native'

class Greeting extends Component{
    render(){
        return( 
            <View>
               <Text>Hello {this.props.name}</Text> 
            </View>
        );
    }
}

class Greeting1 extends Component{
    render(){
        return(
            <View>
                <Text>Good morning {this.props.name}</Text>
            </View>
        );
    }
}

export default class Hello extends Component{
    render(){
        return(
            <View>
            <Greeting name ='TSE'/>
            <Greeting name ='TSE1'/>
            <Greeting name ='TSE2'/>
            <Greeting1 name ='TSE3'/>
            <Greeting1 name ='TSE4'/>
            </View>
        )
    }
}
