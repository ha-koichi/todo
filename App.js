/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import { reducer } from './src/reducers'
// import { store } from './src/redux'

import Navbar from './src/components/Navbar'
import SegmentButton from './src/components/SegmentButton'
import Weather from './src/components/Weather'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const reducers = combineReducers({  
  data: reducer
})

export const store = createStore(reducers)

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navbar />
          <SegmentButton />
          <Weather />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
