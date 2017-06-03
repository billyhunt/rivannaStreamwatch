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


export default class ReportIssueButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completedView: false
    };

  }


  render() {
    return (
      <View
        style={styles.photo}>
        <TouchableOpacity
          style={styles.reportIssueButton}>
          <Text style={styles.title}>Report Issue</Text>
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
  reportIssueButton: {
    borderRadius: 20,
    backgroundColor: '#aaa',
    marginTop: 75,
    marginLeft: 100,
    marginRight: 100
  },
});