/**
 * Rivanna Streamwatch React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry

} from 'react-native';

import MainView from './src/MainViewTemp'


export default class coolKDS extends Component {
  render() {
    return (
      <MainView />

    );
  }
}


AppRegistry.registerComponent('RivannaStreamwatch', () => coolKDS);
