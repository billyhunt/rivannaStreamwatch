/**
 * Created by billyhunt on 6/3/17.
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Picker,
  TextInput
} from 'react-native';

import Title from './Title'
import IssueType from './IssueType'
import PhotoButton from './PhotoButton'
import ReportIssueButton from './ReportIssueButton'
import AdditionalInformation from './AdditionalInformation'

const paymentsUrl = 'http://127.0.0.1:8000/reports/';


export default class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issueType: '',
      photo: '',
      additionalInformation: '',
    };

    this.sendReport = this.sendReport.bind(this);
  }

  sendReport() {
    console.log("peek-a-boo");

    const myInit = { method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        "user": 1,
        "lattitude": "444.000000",
        "longitude": "555.000000",
        "incident_type": "discharge",
      })
    };

    fetch('http://127.0.0.1:8000/reports/', myInit).then(function(data) {
      console.log(data);
    });
  }

  // getOrders() {
  //   const myInit = { method: 'POST',
  //     headers: {
  //       "Content": application/json
  //     },
  //   };
  //
  //   fetch(paymentsUrl, myInit).then(r => r.json())
  //     .then(function(data) {
  //       let squareOrders = this.createOrders(data, init);
  //       if (init) {
  //         this.setState({orders: squareOrders});
  //       } else {
  //         let localOrders = this.state.orders.slice();
  //         let localOrdersIds = localOrders.map(order => order.id);
  //         squareOrders.filter(squareOrder => {
  //           return localOrdersIds.indexOf(squareOrder.id) === -1;
  //         }).map(order => {
  //           localOrders.push(order);
  //         });
  //         this.setState({orders: localOrders.sort((a, b) => a.createdAt - b.createdAt)});
  //       }
  //     }.bind(this))
  //     .catch((err) => {
  //       console.warn("Download error: ", err);
  //       this.getOrders(init);
  //     })
  // }


  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.pageTitle}>Rivanna Streamwatch</Text>
        <Picker
          selectedValue={this.state.issueType}
          onValueChange={(issueType) => this.setState({issueType: issueType})}>
          <Picker.Item label="Illicit Discharge" value="discharge"/>
          <Picker.Item label="Erosion" value="erosion"/>
        </Picker>
        <TouchableOpacity
          style={styles.photoButton}>
          <Text style={styles.title}>Add Photo</Text>
        </TouchableOpacity>
        <View
          style={styles.additionalInformation}>
          <Text>Additional Information</Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity
          style={styles.reportIssueButton}
          onPress={() => this.sendReport()}>
          <Text style={styles.title}>Report Issue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
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
  reportIssueButton: {
    borderRadius: 20,
    backgroundColor: '#aaa',
    marginTop: 75,
    marginLeft: 100,
    marginRight: 100
  },
  additionalInformation: {
    borderRadius: 20,
    margin: 40
  },
  textBox: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1
  },
  pageTitle: {
    height: 50,
    textAlign: 'center',
    paddingTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
  },
});