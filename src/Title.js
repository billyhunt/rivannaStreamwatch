/**
 * Created by billyhunt on 6/3/17.
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class Title extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completedView: false
    };

  }


  render() {
    return (
      <View>
        <Text style={styles.title}>Rivanna Streamwatch</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 50,
    textAlign: 'center',
    paddingTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
  },
});