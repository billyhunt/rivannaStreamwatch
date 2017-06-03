/**
 * Created by billyhunt on 6/3/17.
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Picker
} from 'react-native';


export default class IssueType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completedView: false,
      issueType: ''
    };

  }


  render() {
    return (
      <Picker
        selectedValue={this.state.issueType}
        onValueChange={(issueType) => this.setState({issueType: issueType})}>
        <Picker.Item label="Illicit Discharge" value="discharge"/>
        <Picker.Item label="Erosion" value="erosion"/>
      </Picker>
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