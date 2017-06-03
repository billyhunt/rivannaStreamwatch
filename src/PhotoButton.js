/**
 * Created by billyhunt on 6/3/17.
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


export default class PhotoButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completedView: false
    };

  }


  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.photoButton}>
          <Text style={styles.title}>Add Photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 5
  },
  photoButton: {
    borderRadius: 20,
    backgroundColor: '#1de2f3',
    marginLeft: 100,
    marginRight: 100
  },
});