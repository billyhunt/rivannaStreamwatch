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

import Title from './Title'
import IssueType from './IssueType'
import PhotoButton from './PhotoButton'
import ReportIssueButton from './ReportIssueButton'
import AdditionalInformation from './AdditionalInformation'

export default class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issueType: 'discharge',
      photo: '',
      additionalInformation: '',
    };

  }

  setIssueType() {
    this.setState({issueType: this.state.issueType})
  }


  render() {
    return (
      <View style={styles.mainView}>
        <Title />
        <IssueType issueType={this.state.setIssueType}/>
        <PhotoButton />
        <AdditionalInformation />
        <ReportIssueButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  }
});