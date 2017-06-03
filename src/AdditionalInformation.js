/**
 * Created by billyhunt on 6/3/17.
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';


export default class AdditionalInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completedView: false,
      text: ''
    };

  }


  render() {
    return (
      <View
        style={styles.additionalInformation}>
        <Text>Additional Information</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  additionalInformation: {
    borderRadius: 20,
    margin: 40
  },
  textBox: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1
  }
});