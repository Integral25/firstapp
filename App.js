import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlueButton extends Component 
{render() {
return <Button color='blue' title='Click Me'></Button>
}}


export default class App extends Component {
  render() {
    return (
        <View>
        <Text style={{marginTop:50}}>My first App</Text>
        <BlueButton/>
        </View>
    );
  }
}